// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkitemCommentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12xx34
   */
  commentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e8b2xxxxxx2abdxxxxxxxx23
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      commentId: 'commentId',
      identifier: 'identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentId: 'number',
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

