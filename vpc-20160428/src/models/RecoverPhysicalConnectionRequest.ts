// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverPhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without recovering access to the Express Connect circuit. The system checks the required parameters, request format, and instance status. If the check fails, the corresponding error is returned. If the check succeeds, the request ID is returned.
   * - **false** (default): sends the request. After the request passes the check, access to the Express Connect circuit is recovered.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect circuit.
   * 
   * > Currently, only shared Express Connect circuits can be recovered.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * The client generates the value of this parameter. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      instanceId: 'string',
      regionId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

