// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAINodeRequestAINodeSpecInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodeNum?: string;
  /**
   * @remarks
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
   * @example
   * aipool-xxxxx
   */
  AINodePoolId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  AINodeSpecInfos?: AddAINodeRequestAINodeSpecInfos[];
  /**
   * @remarks
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

