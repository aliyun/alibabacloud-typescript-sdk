// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataPropertiesValue } from "./DataPropertiesValue";


export class GetSchemaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time. Format: YYYY-MM-DD HH:mm:ss.S.
   * 
   * @example
   * 2021-07-14 10:48:43.0
   */
  createdTime?: string;
  /**
   * @remarks
   * Indicates whether the data is deleted.
   * 
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Customer profile
   */
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
   * @remarks
   * The instance ID.
   * 
   * @example
   * 5e0964fd-951c-4e45-b518-d09d4d2db8ca
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of fields.
   */
  properties?: { [key: string]: DataPropertiesValue };
  /**
   * @remarks
   * The last modification time. Format: YYYY-MM-DD HH:mm:ss.S.
   * 
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

export class GetSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: GetSchemaResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Service abnormal, the instance 0418 is ceased.
   */
  message?: string;
  /**
   * @remarks
   * The response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 19D09CCC-F298-4124-849A-AFA217819011
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
      data: GetSchemaResponseBodyData,
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

