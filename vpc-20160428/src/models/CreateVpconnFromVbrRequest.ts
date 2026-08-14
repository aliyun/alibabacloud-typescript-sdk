// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpconnFromVbrRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without transforming the shared Express Connect circuits mode. The system checks the required parameters, request format, and instance status. If the check fails, the corresponding error is returned. If the check succeeds, the corresponding request ID is returned.
   * - **false** (default): sends a Normal request. After the request passes the check, the shared Express Connect circuits mode is transformed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The payer of the shared Express Connect circuits. Valid values:
   * 
   * - **PayByPhysicalConnectionOwner**: The owner of the Express Connect circuit associated with the shared Express Connect circuits pays the fee.
   * - **PayByVirtualPhysicalConnectionOwner**: The owner of the shared Express Connect circuits pays the fee.
   * 
   * @example
   * PayByVirtualPhysicalConnectionOwner
   */
  orderMode?: string;
  /**
   * @remarks
   * The region ID of the shared Express Connect circuits.
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * The instance ID of the cross-account VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp136flp1mf8mlq6r****
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      orderMode: 'OrderMode',
      regionId: 'RegionId',
      token: 'Token',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      orderMode: 'string',
      regionId: 'string',
      token: 'string',
      vbrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

