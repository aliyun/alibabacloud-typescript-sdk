// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableConnectorRequestBody extends $dara.Model {
  /**
   * @remarks
   * A JSON string. qodercli uses apiKey. This field is write-only and is not returned in responses.
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

export class EnableConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The enable request body.
   * 
   * This parameter is required.
   */
  body?: EnableConnectorRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: EnableConnectorRequestBody,
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

