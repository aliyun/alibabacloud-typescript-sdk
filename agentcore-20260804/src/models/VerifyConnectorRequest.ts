// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyConnectorRequestBody extends $dara.Model {
  /**
   * @remarks
   * A JSON string. qodercli uses apiKey. This parameter is used only for validation and is not persisted.
   * 
   * This parameter is required.
   * 
   * @example
   * {"site":"global","organizationId":"org-xxxx","apiKey":"ak-xxxx","serviceAccountKeys":[{"name":"default","serviceAccountKey":"sk-xxxx"}]}
   */
  metadata?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The validation request body.
   * 
   * This parameter is required.
   */
  body?: VerifyConnectorRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: VerifyConnectorRequestBody,
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

