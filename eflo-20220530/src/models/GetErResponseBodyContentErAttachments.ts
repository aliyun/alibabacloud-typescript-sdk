// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErResponseBodyContentErAttachments extends $dara.Model {
  /**
   * @remarks
   * Cross-account
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * Receive all routes automatically
   * 
   * @example
   * true
   */
  autoReceiveAllRoute?: boolean;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1644283112720
   */
  createTime?: string;
  /**
   * @remarks
   * The connection ID of the Lingjun HUB network instance.
   * 
   * @example
   * er-attachment-f32hxfsu
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * Network Instance Name
   * 
   * @example
   * fudan-egpu
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1649303733000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * vpd-kkopgtne
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * zhijiao
   */
  instanceName?: string;
  /**
   * @remarks
   * Instance type: VPD and VCC
   * 
   * Valid value:
   * 
   * *   VCC: Lingjun Connection.
   * *   VPD: Lingjun network segment.
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
   * success
   */
  message?: string;
  /**
   * @remarks
   * The synchronized region where the ECS instances are deployed.
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
   * rg-acfmzzka6bnjvbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * xxxxxxxx
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166277
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

