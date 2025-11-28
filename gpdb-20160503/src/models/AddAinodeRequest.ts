// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAINodeRequestAINodeSpecInfos extends $dara.Model {
  /**
   * @remarks
   * The number of AI nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeNum?: string;
  /**
   * @remarks
   * The AI node specifications.
   * 
   *     ADB.AIStandard.1
   *     ADB.AIMedium.1
   *     ADB.AILarge.1
   *     ADB.AIStandard.2
   *     ADB.AIMedium.2
   *     ADB.AILarge.2
   *     ADB.AIXLarge.2
   *     ADB.AIStandard.6
   *     ADB.AIMedium.6
   *     ADB.AILarge.6
   *     ADB.AIXLarge.6
   *     ADB.AIStandard.3
   *     ADB.AIMedium.3
   *     ADB.AILarge.3
   *     ADB.AIXLarge.3
   *     ADB.AIStandard.4
   *     ADB.AIMedium.4
   *     ADB.AILarge.4
   *     ADB.AIXLarge.4
   *     ADB.AIStandard.5
   *     ADB.AIMedium.5
   *     ADB.AILarge.5
   *     ADB.AIXLarge.5
   *     ADB.AIStandard.8
   *     ADB.AIMedium.8
   *     ADB.AILarge.8
   *     ADB.AIXLarge.8
   *     ADB.AI2XLarge.8
   * 
   * This parameter is required.
   * 
   * @example
   * ADB.AIStandard.1
   */
  nodeSpec?: string;
  static names(): { [key: string]: string } {
    return {
      nodeNum: 'NodeNum',
      nodeSpec: 'NodeSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeNum: 'string',
      nodeSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAINodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource pool to which the AI node belongs.
   * 
   * @example
   * aipool-xxxxx
   */
  AINodePoolId?: string;
  /**
   * @remarks
   * The AI node specifications.
   * 
   * This parameter is required.
   */
  AINodeSpecInfos?: AddAINodeRequestAINodeSpecInfos[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      AINodePoolId: 'AINodePoolId',
      AINodeSpecInfos: 'AINodeSpecInfos',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodePoolId: 'string',
      AINodeSpecInfos: { 'type': 'array', 'itemType': AddAINodeRequestAINodeSpecInfos },
      DBInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AINodeSpecInfos)) {
      $dara.Model.validateArray(this.AINodeSpecInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

