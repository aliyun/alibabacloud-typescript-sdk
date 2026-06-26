// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunTaskInstancesRequest extends $dara.Model {
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
   * The list of node instance IDs.
   */
  ids?: number[];
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

