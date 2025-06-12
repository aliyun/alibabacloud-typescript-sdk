// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataPropertiesValue } from "./DataPropertiesValue";


export class GetSchemaResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2021-07-14 10:48:43.0
   */
  createdTime?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  description?: string;
  /**
   * @remarks
   * schema id
   * 
   * @example
   * profile
   */
  id?: string;
  /**
   * @example
   * 5e0964fd-951c-4e45-b518-d09d4d2db8ca
   */
  instanceId?: string;
  properties?: { [key: string]: DataPropertiesValue };
  /**
   * @example
   * 2021-07-14 10:48:43.0
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      deleted: 'Deleted',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      properties: 'Properties',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deleted: 'boolean',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': DataPropertiesValue },
      updatedTime: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

