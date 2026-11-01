// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccessApplicationRequestBody extends $dara.Model {
  /**
   * @remarks
   * The name of the access application.
   * 
   * @example
   * my-access-application
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of redirect URIs.
   */
  redirectUris?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationName: 'applicationName',
      redirectUris: 'redirectUris',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      redirectUris: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.redirectUris)) {
      $dara.Model.validateArray(this.redirectUris);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating the access application.
   * 
   * This parameter is required.
   */
  body?: UpdateAccessApplicationRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateAccessApplicationRequestBody,
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

