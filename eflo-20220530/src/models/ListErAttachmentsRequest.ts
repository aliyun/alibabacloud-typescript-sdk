// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListErAttachmentsRequest extends $dara.Model {
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
   * Specifies whether to enable paged query. Valid values:
   * 
   * *   **true**: enables paged query.
   * *   **false**: Paged query is not enabled.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * The ID of the network instance connection
   * 
   * @example
   * er-attachment-i1ioibyf
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * The name of the network instance connection.
   * 
   * @example
   * vcc-cn-209300qha01
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the network instance. Valid values: **VPD** and **VCC**.
   * 
   * For more information, see [What is Lingjun?](https://help.aliyun.com/document_detail/444430.html)
   * 
   * You can query **Lingjun CIDR blocks** and **Lingjun connections** by [ListVpds](https://help.aliyun.com/document_detail/2331077.html) and [ListVccs](https://help.aliyun.com/document_detail/2399526.html?) respectively.
   * 
   * @example
   * vcc-cn-209300qha01
   */
  instanceId?: string;
  /**
   * @remarks
   * The mitigation plan of the instance. Valid values:
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
   * The page number to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
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
   * The ID of the tenant to which the instance belongs.
   * 
   * @example
   * 1111156667137893
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
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
  static names(): { [key: string]: string } {
    return {
      autoReceiveAllRoute: 'AutoReceiveAllRoute',
      enablePage: 'EnablePage',
      erAttachmentId: 'ErAttachmentId',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReceiveAllRoute: 'boolean',
      enablePage: 'boolean',
      erAttachmentId: 'string',
      erAttachmentName: 'string',
      erId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

