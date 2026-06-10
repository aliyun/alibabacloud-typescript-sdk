// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstallRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2024-11-27T16:37:53
   */
  createdAt?: string;
  /**
   * @remarks
   * instance ID
   * 
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @remarks
   * widget ID
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * plugin Version
   * 
   * @example
   * 3.4.0-1
   */
  pluginVersion?: string;
  /**
   * @remarks
   * widget status
   * 
   * @example
   * Installed
   */
  status?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2024-11-27T16:37:53
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      instanceId: 'instance_id',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
      status: 'status',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      instanceId: 'string',
      pluginId: 'string',
      pluginVersion: 'string',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentInstallRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID, which can be used for end-to-end Diagnosis
   * 
   * @example
   * E8CDFBA1-0564-5897-B070-D3C85002AF2F
   */
  requestId?: string;
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates successful authorization;  
   * - Other status codes indicate failed authorization. When authorization fails, view the `message` field to obtain detailed error message;
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return Result.
   */
  data?: ListAgentInstallRecordsResponseBodyData[];
  /**
   * @remarks
   * error message  
   * - If `code == Success`, this field is empty;  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 64
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAgentInstallRecordsResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

