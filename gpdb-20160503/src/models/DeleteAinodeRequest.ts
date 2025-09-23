// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAINodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  AINodeNum?: number;
  /**
   * @example
   * aipool-xxxx
   */
  AINodePoolId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  nodeNames?: string[];
  static names(): { [key: string]: string } {
    return {
      AINodeNum: 'AINodeNum',
      AINodePoolId: 'AINodePoolId',
      DBInstanceId: 'DBInstanceId',
      nodeNames: 'NodeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodeNum: 'number',
      AINodePoolId: 'string',
      DBInstanceId: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

