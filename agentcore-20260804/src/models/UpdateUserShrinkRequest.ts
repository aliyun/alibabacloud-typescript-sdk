// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating a user.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * Not supported.
   * 
   * @example
   * Not supported
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

