// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSourcesFromTrafficMirrorSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to check the request without performing the operation. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system checks the required parameters, request format, and limits. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. After the request passes the check, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the traffic mirror session belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about regions that support traffic mirroring, see [Overview of traffic mirroring](https://help.aliyun.com/document_detail/207513.html).
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
   * The ID of the traffic mirror session from which you want to delete a traffic mirror source.
   * 
   * This parameter is required.
   * 
   * @example
   * tms-j6cla50buc44ap8tu****
   */
  trafficMirrorSessionId?: string;
  /**
   * @remarks
   * The ID of the traffic mirror source to be deleted. Maximum value of N: 10.
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

