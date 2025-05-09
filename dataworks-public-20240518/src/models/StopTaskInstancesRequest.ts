// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopTaskInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID list of the task instance.
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

