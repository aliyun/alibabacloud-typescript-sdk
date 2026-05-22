// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyRequestAuth extends $dara.Model {
  accessIps?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessIps: 'accessIps',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIps: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessIps)) {
      $dara.Model.validateArray(this.accessIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiKeyRequest extends $dara.Model {
  auth?: UpdateApiKeyRequestAuth;
  /**
   * @example
   * update description.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'auth',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: UpdateApiKeyRequestAuth,
      description: 'string',
    };
  }

  validate() {
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

