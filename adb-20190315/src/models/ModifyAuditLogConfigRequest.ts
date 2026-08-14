// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the SQL audit feature. Valid values:
   * 
   * - **on**: Enable SQL audit.
   * 
   * - **off**: Disable SQL audit.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  auditLogStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to view available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditLogStatus: 'AuditLogStatus',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditLogStatus: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

