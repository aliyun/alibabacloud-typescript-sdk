// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogStoreKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-hcl2
   */
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * nbgame-point
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
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
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
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

