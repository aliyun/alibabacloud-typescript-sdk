// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the node group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * i118191731740041623425
   */
  clusterId?: string;
  /**
   * @remarks
   * The configurations of the node group.
   * 
   * This parameter is required.
   */
  nodeGroupShrink?: string;
  /**
   * @remarks
   * The configuration of the node unit.
   * 
   * @example
   * {\\"NodeUnitId\\":\\"3c2999a8-2b95-4409-93c5-ad3985fc5c9f\\",\\"ResourceGroupId\\":\\"\\",\\"MaxNodes\\":0,\\"NodeUnitName\\":\\"asi_cn-serverless-sale_e01-lingjun-psale\\"}
   */
  nodeUnitShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeGroupShrink: 'NodeGroup',
      nodeUnitShrink: 'NodeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeGroupShrink: 'string',
      nodeUnitShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

