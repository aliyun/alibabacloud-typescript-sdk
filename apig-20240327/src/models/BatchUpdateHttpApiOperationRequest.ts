// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateHttpApiOperationRequestAuthConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication mode.
   * 
   * @example
   * Custom
   */
  authMode?: string;
  /**
   * @remarks
   * The authentication type.
   * 
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
  /**
   * @remarks
   * The authentication configuration. This parameter is required when enableAuth is set to true.
   */
  authConfig?: BatchUpdateHttpApiOperationRequestAuthConfig;
  /**
   * @remarks
   * Specifies whether to enable consumer authentication. If set to true, a valid authConfig must be provided. If set to false, authConfig is not validated and the existing configuration remains unchanged.
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The list of operation IDs to update in batches. This parameter cannot be empty.
   */
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

