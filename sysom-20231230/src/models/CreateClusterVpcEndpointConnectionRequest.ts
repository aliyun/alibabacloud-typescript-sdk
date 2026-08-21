// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterVpcEndpointConnectionRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The ID of the ACK cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ray-bzxw7g2r7301r3f2
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region to which the cluster belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      clusterId: 'clusterId',
      dryRun: 'dryRun',
      region: 'region',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      clusterId: 'string',
      dryRun: 'boolean',
      region: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

