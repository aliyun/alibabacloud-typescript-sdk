// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceClockOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency parameter.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: sends a check request without querying resource status. The check items include whether the AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether required parameters are specified. If the check fails, the corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
   * 
   * - false: sends a Normal request. If the request passes the check, a 2xx HTTP status code is returned and the resource status is directly queried.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The PTP status. Valid values:
   * 
   * - enabled: Enables PTP.
   * 
   * - disabled: Disables PTP.
   * 
   * Default value: disabled.
   * 
   * @example
   * enabled
   */
  ptpStatus?: string;
  /**
   * @remarks
   * The region ID of the ECS instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      ptpStatus: 'PtpStatus',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      ptpStatus: 'string',
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

