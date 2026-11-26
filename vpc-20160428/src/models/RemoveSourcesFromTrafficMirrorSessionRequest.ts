// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSourcesFromTrafficMirrorSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, and you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * 
   * - **true**: performs a dry run and does not remove the traffic mirror sources. The system checks whether the required parameters are specified, the request format, and the limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request and removes the traffic mirror sources if the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the traffic mirror session. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about the regions that support traffic mirroring, see [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance ID of the traffic mirror session from which you want to delete the traffic mirror sources.
   * 
   * This parameter is required.
   * 
   * @example
   * tms-j6cla50buc44ap8tu****
   */
  trafficMirrorSessionId?: string;
  /**
   * @remarks
   * The instance IDs of the traffic mirror sources that you want to delete. The maximum value of **N** is **10**.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-j6c8znm5l1yt4sox****
   */
  trafficMirrorSourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMirrorSessionId: 'TrafficMirrorSessionId',
      trafficMirrorSourceIds: 'TrafficMirrorSourceIds',
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
      trafficMirrorSessionId: 'string',
      trafficMirrorSourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.trafficMirrorSourceIds)) {
      $dara.Model.validateArray(this.trafficMirrorSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

