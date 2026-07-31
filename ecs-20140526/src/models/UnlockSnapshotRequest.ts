// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnlockSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/en/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * @example
   * 5EC38E7D-389F-1925-ABE2-D7925A8F****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values: 
   * - true: performs only a dry run without actually executing the request. The system checks whether required parameters are specified, whether the request format is valid, and whether business restrictions are met. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned. 
   * - false (default): performs a dry run and executes the request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * 158704318252****
   */
  ownerAccount?: string;
  /**
   * @example
   * 158704318252****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://www.alibabacloud.com/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeregions) to query the most recent list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 158704318252****
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 158704318252****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-9dp2qojdpdfmgfmf****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

