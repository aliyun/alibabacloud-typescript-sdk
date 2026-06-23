// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVSwitchCidrReservationAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request.
   * 
   * Generate a unique value from your client for this parameter to guarantee uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 02fb3da4-230e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run of the request. Valid values:
   * - **true**: Sends a dry run request without creating any resource (performing the API operation). The system checks whether required parameters are specified, whether the request format is valid, and whether business limits are met. If the check fails, an error is returned. If the check passes, the error code `DryRunOperation` is returned.
   * - **false** (default): Sends a normal request. If the check passes, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the vSwitch is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new description of the reserved CIDR block. The default value is empty.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * ReservationDescription
   */
  vSwitchCidrReservationDescription?: string;
  /**
   * @remarks
   * The ID of the reserved CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vcr-bp1m12saqteraw3rp****
   */
  vSwitchCidrReservationId?: string;
  /**
   * @remarks
   * The new name of the reserved CIDR block.
   * 
   * The name must be 2 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * ReservationName
   */
  vSwitchCidrReservationName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchCidrReservationDescription: 'VSwitchCidrReservationDescription',
      vSwitchCidrReservationId: 'VSwitchCidrReservationId',
      vSwitchCidrReservationName: 'VSwitchCidrReservationName',
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
      vSwitchCidrReservationDescription: 'string',
      vSwitchCidrReservationId: 'string',
      vSwitchCidrReservationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

