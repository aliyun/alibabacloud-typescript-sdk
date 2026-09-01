// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVbrToVpconnRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without associating the VBR instance with shared Express Connect circuits. The system checks whether the required parameters are specified, the request format is valid, and the instance status is correct. If the check fails, the corresponding error is returned. If the check passes, the request ID is returned.
   * - **false** (default): sends a normal request. After the check passes, the VBR instance is directly associated with shared Express Connect circuits.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the shared Express Connect circuits.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
   * The client token must be unique among different requests. The maximum length is 64 ASCII characters.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  /**
   * @remarks
   * The VBR instance ID.
   * >The ID of the VBR instance to be migrated. The VBR must currently be directly attached to an Express Connect circuit owned by the caller, and must be the same VBR specified in CreateVpconnFromVbr.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp133sn3nwjvu7twc****
   */
  vbrId?: string;
  /**
   * @remarks
   * The ID of the shared Express Connect circuits (VirtualPhysicalConnection) instance.
   * >The shared Express Connect circuits instance ID returned by CreateVpconnFromVbr. The instance must have been confirmed and accepted by the tenant (Confirmed) and be in the Enabled state.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  vpconnId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      regionId: 'RegionId',
      token: 'Token',
      vbrId: 'VbrId',
      vpconnId: 'VpconnId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      regionId: 'string',
      token: 'string',
      vbrId: 'string',
      vpconnId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

