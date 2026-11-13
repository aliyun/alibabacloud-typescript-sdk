// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunTaskInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The list of task instance IDs.
   */
  ids?: number[];
  /**
   * @remarks
   * Specifies whether to rerun the task instance with the latest configuration.
   * 
   * @example
   * false
   */
  useLatestConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      ids: 'Ids',
      useLatestConfig: 'UseLatestConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
      useLatestConfig: 'boolean',
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

