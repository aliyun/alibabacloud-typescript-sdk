// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNsasSuspEventTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the container field. Valid values:
   * 
   * *   **clusterId**: the ID of the cluster
   * 
   * @example
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the container field.
   * 
   * @example
   * ca3108551c83c4d949106e1ab9e1e****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The ID of the request source. Set the value to **sas**, which indicates that the request is sent from Security Center.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of the accounts that you want to query. Default value: **0**. Valid values:
   * 
   * *   **0**: the current account.
   * *   **1**: all accounts.
   * 
   * @example
   * 0
   */
  multiAccountActionType?: number;
  /**
   * @remarks
   * The name of the alert type.
   * 
   * @example
   * Unusual Logon
   */
  name?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * testECS
   */
  remark?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 180.212.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * List of supported alarm operation types.
   */
  supportOperateCodeList?: string[];
  /**
   * @remarks
   * The UUIDs of servers. Separate multiple UUIDs with commas (,).
   * 
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to query the UUIDs of servers.
   * 
   * @example
   * f56406cb-916d-42db-b6f7-2ff79e34****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      from: 'From',
      lang: 'Lang',
      multiAccountActionType: 'MultiAccountActionType',
      name: 'Name',
      remark: 'Remark',
      sourceIp: 'SourceIp',
      supportOperateCodeList: 'SupportOperateCodeList',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerFieldName: 'string',
      containerFieldValue: 'string',
      from: 'string',
      lang: 'string',
      multiAccountActionType: 'number',
      name: 'string',
      remark: 'string',
      sourceIp: 'string',
      supportOperateCodeList: { 'type': 'array', 'itemType': 'string' },
      uuids: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportOperateCodeList)) {
      $dara.Model.validateArray(this.supportOperateCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

