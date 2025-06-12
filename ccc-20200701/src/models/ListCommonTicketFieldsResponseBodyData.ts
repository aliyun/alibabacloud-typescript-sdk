// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataPropertiesValue } from "./DataPropertiesValue";


export class ListCommonTicketFieldsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1703517780627
   */
  createdTime?: string;
  /**
   * @remarks
   * Schema ID。
   * 
   * @example
   * ticketing
   */
  id?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  properties?: { [key: string]: DataPropertiesValue };
  /**
   * @example
   * 1716211430928
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      instanceId: 'InstanceId',
      properties: 'Properties',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
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

