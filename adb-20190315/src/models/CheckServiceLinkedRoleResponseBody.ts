// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an SLR is created.
   * 
   * @example
   * true
   */
  hasServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA0F6761-7A8C-59F8-9624-FB56788C0EDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasServiceLinkedRole: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

