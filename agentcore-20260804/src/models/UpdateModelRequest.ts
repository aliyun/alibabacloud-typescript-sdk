// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelRequestBody extends $dara.Model {
  /**
   * @remarks
   * The model description. Maximum length: 255 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateModelRequestBody;
  /**
   * @remarks
   * The client token for idempotence. Not currently supported.
   * 
   * @example
   * client-token-1
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
      body: UpdateModelRequestBody,
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

