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

export class ListCommonTicketFieldsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListCommonTicketFieldsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * 30C7D235-DDCF-4C7F-A462-5E2598252C2B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCommonTicketFieldsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

