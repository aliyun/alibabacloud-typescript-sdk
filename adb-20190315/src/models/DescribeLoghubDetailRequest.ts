// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoghubDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the log shipping job.
   * 
   * This parameter is required.
   * 
   * @example
   * wap_log_full_to_adb
   */
  exportName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * sls-hz-php-ad
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      exportName: 'ExportName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

