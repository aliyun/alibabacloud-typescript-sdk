// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequestBody extends $dara.Model {
  /**
   * @remarks
   * The display name of the user. The name must be 1 to 32 characters in length. At least one of displayName, email, and note must be specified.
   * 
   * @example
   * John
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user. The address can be up to 256 characters in length.
   * 
   * @example
   * user-01@example.com
   */
  email?: string;
  /**
   * @remarks
   * The note for the user. The note can be up to 1,024 characters in length.
   * 
   * @example
   * Agent operations team member
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      email: 'email',
      note: 'note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating a user.
   */
  body?: UpdateUserRequestBody;
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
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateUserRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

