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
   * - true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, the authorization status of the RAM user, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - false: performs a dry run and sends the request. If the request passes the dry run, a 2XX HTTP status code is returned and the operation is executed.
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
   * - enabled: enables PTP.
   * 
   * - disabled: disables PTP.
   * 
   * Default value: disabled.
   * 
   * @example
   * enabled
   */
  ptpStatus?: string;
  /**
   * @remarks
   * The region ID of the ECS instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

