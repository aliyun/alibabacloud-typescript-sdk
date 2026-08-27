// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateHttpApiOperationRequestAuthConfig extends $dara.Model {
  /**
   * @example
   * Custom
   */
  authMode?: string;
  /**
   * @example
   * Jwt
   */
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      authMode: 'authMode',
      authType: 'authType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMode: 'string',
      authType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateHttpApiOperationRequest extends $dara.Model {
  authConfig?: BatchUpdateHttpApiOperationRequestAuthConfig;
  /**
   * @example
   * true
   */
  enableAuth?: boolean;
  operationIds?: string[];
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      enableAuth: 'enableAuth',
      operationIds: 'operationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: BatchUpdateHttpApiOperationRequestAuthConfig,
      enableAuth: 'boolean',
      operationIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(Array.isArray(this.operationIds)) {
      $dara.Model.validateArray(this.operationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

