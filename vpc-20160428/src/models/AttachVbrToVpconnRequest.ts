// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVbrToVpconnRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without associating the VBR instance with the shared Express Connect circuits. The system checks the required parameters, request format, and instance status. If the check fails, the corresponding error is returned. If the check succeeds, the request ID is returned.
   * - **false** (default): sends a normal request. After the check succeeds, the VBR instance is directly associated with the shared Express Connect circuits.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the shared Express Connect circuits.
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
   * The client token must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  /**
   * @remarks
   * The instance ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp133sn3nwjvu7twc****
   */
  vbrId?: string;
  /**
   * @remarks
   * The instance ID of the shared Express Connect circuits.
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

