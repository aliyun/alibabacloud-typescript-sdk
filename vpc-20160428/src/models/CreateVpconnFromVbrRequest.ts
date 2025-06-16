// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpconnFromVbrRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and instance status. If the request fails the dry run, an error message is returned. If the request passes the dry run, the system returns the ID of the request.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The payer for the shared Express Connect circuit. Valid values:
   * 
   * *   **PayByPhysicalConnectionOwner**: the owner of the shared Express Connect circuit
   * *   **PayByVirtualPhysicalConnectionOwner**: the owner of the hosted connection
   * 
   * @example
   * PayByVirtualPhysicalConnectionOwner
   */
  orderMode?: string;
  /**
   * @remarks
   * The region ID of the hosted connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  /**
   * @remarks
   * The ID of the associated VBR.
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

