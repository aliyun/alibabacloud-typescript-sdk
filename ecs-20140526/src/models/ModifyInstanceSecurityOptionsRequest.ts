// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSecurityOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate the value from your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/en/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * - true: performs only a dry run. The secure boot option of the instance is not modified.
   * - false: performs a dry run and sends the request. If the request passes the dry run, the secure boot option of the instance is modified.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable or disable UEFI secure boot. If this parameter is set to true, the instance type must support secure boot. You can call the DescribeInstanceTypes operation and check whether the value of SecurityOptions.SecureBootSupport is supported. Valid values:
   * 
   * - true: enables UEFI secure boot.
   * - false: disables UEFI secure boot.
   * 
   * Default value: false.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enableSecureBoot?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://www.alibabacloud.com/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeregions) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      enableSecureBoot: 'EnableSecureBoot',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      enableSecureBoot: 'boolean',
      instanceId: 'string',
      ownerId: 'number',
      regionId: 'string',
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

