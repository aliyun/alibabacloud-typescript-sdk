// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSourcesToTrafficMirrorSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the traffic mirror source is added.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the traffic mirror session.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * For more information about the regions that support traffic mirroring, see [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
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
   * The instance ID of the traffic mirror session to which you want to increase traffic mirror sources.
   * 
   * This parameter is required.
   * 
   * @example
   * tms-j6cla50buc44ap8tu****
   */
  trafficMirrorSessionId?: string;
  /**
   * @remarks
   * The instance ID of the traffic mirror source to increase. Currently, only elastic network interfaces (ENIs) are supported as traffic mirror sources. The default value of **N** is **1**, which indicates that you can add only one traffic mirror source to a traffic mirror session.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-j6ccmrl8z3xkvxgw****
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

