// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopWorkflowInstancesShrinkRequest extends $dara.Model {
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
   * The IDs of the workflow instances. You can call ListWorkflowInstances to query workflow instance IDs.
   * 
   * This parameter is required.
   */
  idsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      idsShrink: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      idsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

