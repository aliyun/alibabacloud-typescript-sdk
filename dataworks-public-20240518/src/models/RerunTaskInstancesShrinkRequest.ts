// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunTaskInstancesShrinkRequest extends $dara.Model {
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
  idsShrink?: string;
  /**
   * @remarks
   * Specifies whether to rerun instances with the latest configuration.
   * 
   * @example
   * false
   */
  useLatestConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      idsShrink: 'Ids',
      useLatestConfig: 'UseLatestConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      idsShrink: 'string',
      useLatestConfig: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

