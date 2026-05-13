// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterVpcEndpointConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ray-bzxw7g2r7301r3f2
   */
  clusterId?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      dryRun: 'dryRun',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dryRun: 'boolean',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

