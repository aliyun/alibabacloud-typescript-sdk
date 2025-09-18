// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSpecNodeGroup extends $dara.Model {
  modifyType?: string;
  /**
   * @remarks
   * 新实例类型。
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g7.xlarge
   */
  newInstanceType?: string;
  /**
   * @remarks
   * 节点组ID。
   * 
   * This parameter is required.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyType: 'ModifyType',
      newInstanceType: 'NewInstanceType',
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyType: 'string',
      newInstanceType: 'string',
      nodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

