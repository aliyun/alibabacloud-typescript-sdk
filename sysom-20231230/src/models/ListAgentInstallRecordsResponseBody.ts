// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstallRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-11-27T16:37:53
   */
  createdAt?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * The plug-in version.
   * 
   * @example
   * 3.4.0-1
   */
  pluginVersion?: string;
  /**
   * @remarks
   * The component status.
   * 
   * @example
   * Installed
   */
  status?: string;
  /**
   * @remarks
   * The update time.
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
   * The request ID, which is active for end-to-end diagnostics.
   * 
   * @example
   * E8CDFBA1-0564-5897-B070-D3C85002AF2F
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate that the authorization has failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned results.
   */
  data?: ListAgentInstallRecordsResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the error message for the request.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * The total number of records.
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

