// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSchemaPropertiesValue } from "./DataSchemaPropertiesValue";


export class ListDocumentsResponseBodyDataSchema extends $dara.Model {
  /**
   * @example
   * 2020-10-14T09:53:53Z
   */
  createdTime?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * schame id
   * 
   * @example
   * profile
   */
  id?: string;
  /**
   * @example
   * 87b12784-8ce2-40b6-b21f-c49cb3b5501e
   */
  instanceId?: string;
  properties?: { [key: string]: DataSchemaPropertiesValue };
  /**
   * @example
   * 2020-10-14T09:53:53Z
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
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': DataSchemaPropertiesValue },
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

