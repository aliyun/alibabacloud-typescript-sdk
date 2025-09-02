// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSensitiveDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the sensitive data returned. The information includes totalCount and sensDatas. sensDatas includes the following parameters:
   * 
   * *   guid: the ID of the metadata of the tenant. For example, the ID of the metadata in the MaxCompute compute engine is in the Project name.Table name.Column name format.
   * *   sensType: the type of the sensitive data.
   * *   sensLevel: the sensitivity level of the sensitive data
   */
  sensitiveData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sensitiveData: 'SensitiveData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sensitiveData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.sensitiveData) {
      $dara.Model.validateMap(this.sensitiveData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

