// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectorRequestBody extends $dara.Model {
  /**
   * @remarks
   * A JSON string. qodercli uses a new apiKey. The value is write-only and is not returned in responses.
   * 
   * This parameter is required.
   * 
   * @example
   * {"site":"global","organizationId":"org-xxxx"}
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

export class UpdateConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The update request body.
   * 
   * This parameter is required.
   */
  body?: UpdateConnectorRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateConnectorRequestBody,
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

