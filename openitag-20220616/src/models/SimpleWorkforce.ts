// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimpleWorkforce extends $dara.Model {
  /**
   * @remarks
   * List of personnel information.
   */
  userIds?: number[];
  /**
   * @remarks
   * Node ID. For more information, see [GetTaskWorkforce](https://help.aliyun.com/document_detail/454697.html).
   * 
   * @example
   * 2
   */
  workNodeId?: number;
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
      workNodeId: 'WorkNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'number' },
      workNodeId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

