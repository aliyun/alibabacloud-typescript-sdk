// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartWorkflowInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The IDs of workflow instances.
   * 
   * This parameter is required.
   */
  ids?: number[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

