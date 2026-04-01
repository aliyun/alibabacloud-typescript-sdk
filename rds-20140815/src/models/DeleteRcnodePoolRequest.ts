// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster to which the RDS Custom instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * c463aaa89e2b84cacacfbf23c4867****
   */
  clusterId?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * np31da1b38983f4511b490fc62108a****
   */
  nodePoolId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodePoolId: 'NodePoolId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodePoolId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

