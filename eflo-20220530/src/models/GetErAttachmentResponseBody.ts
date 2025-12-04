// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErAttachmentResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Whether cross-account. Valid values:
   * 
   * *   **true**: The network instance is a cross-account resource.
   * *   **false**: The current network instance is a resource of the current account.
   * 
   * @example
   * fasle
   */
  across?: boolean;
  /**
   * @remarks
   * Indicates whether to automatically receive all routes from all instances under the Lingjun HUB. Valid values:
   * 
   * *   **true**: received automatically.
   * *   **false**: Not received.
   * 
   * @example
   * true
   */
  autoReceiveAllRoute?: boolean;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1648085472000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB network instance.
   * 
   * @example
   * er-attachment-i1ioibyf
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * The name of the Lingjun HUB network instance.
   * 
   * @example
   * vpd-lxnsj2cx
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB instance.
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1648085472000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the network instance. Valid values: **VPD** and **VCC**.
   * 
   * For more information, see [What is Lingjun?](https://help.aliyun.com/document_detail/444430.html)
   * 
   * You can query **Lingjun CIDR blocks** and **Lingjun connections** by [ListVpds](https://help.aliyun.com/document_detail/2331077.html) and [ListVccs](https://help.aliyun.com/document_detail/2399526.html?) respectively.
   * 
   * @example
   * vpd-lxnsj2cx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * vpd-wulanchabu-main
   */
  instanceName?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * *   **VPD**: indicates the Lingjun CIDR block.
   * *   **VCC**: indicates a Lingjun connection.
   * 
   * @example
   * VPD
   */
  instanceType?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzb3n5lgk2ieq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1620939556166277
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **Available**: Normal.
   * *   **Not Available**: Not available.
   * *   **Executing**: The task is being executed.
   * *   **Deleting**: The account is being deleted
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      autoReceiveAllRoute: 'AutoReceiveAllRoute',
      createTime: 'CreateTime',
      erAttachmentId: 'ErAttachmentId',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      across: 'boolean',
      autoReceiveAllRoute: 'boolean',
      createTime: 'string',
      erAttachmentId: 'string',
      erAttachmentName: 'string',
      erId: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: GetErAttachmentResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is displayed.)
   * 
   * @example
   * You don\\"t have the permission to do this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F0D9440-1F97-5613-87CD-D3047172A93C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetErAttachmentResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

