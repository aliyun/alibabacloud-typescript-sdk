// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTaskInstanceDependenciesShrinkRequest extends $dara.Model {
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
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The IDs of ancestor instances of the instance
   */
  upstreamTaskInstanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      id: 'Id',
      upstreamTaskInstanceIdsShrink: 'UpstreamTaskInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      id: 'number',
      upstreamTaskInstanceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

