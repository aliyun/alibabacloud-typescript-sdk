// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListErAttachmentsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * Whether to cross accounts. Valid values:
   * 
   * *   **true**: The network instance is a cross-account resource.
   * *   **false**: The current network instance is a resource of the current account.
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * Whether to automatically receive all routes from all instances under this Lingjun HUB. Valid values:
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
   * 1669734207000
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
   * vcc-cn-209300qha01
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB instance.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1640187007000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the network instance. Valid values: **VPD** and **VCC**.
   * 
   * For more information, see [What is Lingjun?](https://help.aliyun.com/document_detail/444430.html)
   * 
   * You can query **Lingjun CIDR blocks** and **Lingjun connections** by [ListVpds](https://help.aliyun.com/document_detail/2331077.html) and [ListVccs](https://help.aliyun.com/document_detail/2399526.html) respectively.
   * 
   * @example
   * vcc-cn-209300qha02
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * vcc-wulanchabu-main
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
   * VCC
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
   * Lingjun HUB region information.
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
   * rg-aekzlki4ehfse4y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1111156667137893
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

export class ListErAttachmentsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The list of Lingjun HUB network instances.
   */
  data?: ListErAttachmentsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListErAttachmentsResponseBodyContentData },
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

export class ListErAttachmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
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
   * The data returned.
   */
  content?: ListErAttachmentsResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is displayed.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D9D6E7B-365B-5200-BFA6-9B79E269058C
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
      content: ListErAttachmentsResponseBodyContent,
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

