// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodesClassRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * >  If you specify this parameter, DBNode.N.TargetClass is required. N is an integer that starts from 1. The maximum value of N is calculated by using the following formula:16 - The number of current nodes.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The specifications of the node that you want to change. For more information, see [Specifications of compute nodes](https://help.aliyun.com/document_detail/102542.html).
   * 
   * >  If you specify this parameter, DBNode.N.DBNodeId is required. N is an integer that starts from 1. The maximum value of N is calculated by using the following formula:16 - The number of current nodes.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  targetClass?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      targetClass: 'TargetClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      targetClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

