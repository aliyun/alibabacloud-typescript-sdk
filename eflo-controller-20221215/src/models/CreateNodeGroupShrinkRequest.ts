// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i118191731740041623425
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeGroupShrink?: string;
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

