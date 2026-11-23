// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretValueRequest extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * My secret
   */
  comment?: string;
  /**
   * @remarks
   * The content of the ciphertext.
   * 
   * @example
   * password
   */
  content?: string;
  /**
   * @remarks
   * The name of the ciphertext.
   * 
   * @example
   * mysecret
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      content: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

