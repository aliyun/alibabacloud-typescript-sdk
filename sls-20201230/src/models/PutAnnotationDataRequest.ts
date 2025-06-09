// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLDataParam } from "./MldataParam";


export class PutAnnotationDataRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the data.
   * 
   * @example
   * 2156d560fc7c01420542df92cd6365ds
   */
  annotationdataId?: string;
  /**
   * @remarks
   * The data structure of the request.
   */
  mlDataParam?: MLDataParam;
  /**
   * @remarks
   * The raw log data.
   */
  rawLog?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      annotationdataId: 'annotationdataId',
      mlDataParam: 'mlDataParam',
      rawLog: 'rawLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationdataId: 'string',
      mlDataParam: MLDataParam,
      rawLog: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  validate() {
    if(this.mlDataParam && typeof (this.mlDataParam as any).validate === 'function') {
      (this.mlDataParam as any).validate();
    }
    if(Array.isArray(this.rawLog)) {
      $dara.Model.validateArray(this.rawLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

