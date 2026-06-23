// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: Sends a check request without deleting the VSwitch. The check items include whether required parameters are specified, the request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): Sends a normal request. After the check succeeds, an HTTP 2xx status code is returned and the VSwitch is directly deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VSwitch to delete.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VSwitch to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-asdfjlna****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

