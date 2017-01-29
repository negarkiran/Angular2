import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "dataFilter",
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{
                if(row.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1){
                    return true;
                }else if(row.email.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1){
                    return true;
                }else if(row.city.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1){
                    return true;
                }else{
                    return false;
                }
            });
        }
        return array;
    }
}