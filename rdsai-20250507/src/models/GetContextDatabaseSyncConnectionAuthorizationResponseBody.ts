// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseSyncConnectionAuthorizationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authorization method. Valid values: app, pasted-url, static-secret, and none.
   * 
   * @example
   * app
   */
  authKind?: string;
  /**
   * @remarks
   * The authorization status.
   * 
   * @example
   * ready
   */
  authState?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * R&D team DingTalk data source
   */
  displayName?: string;
  /**
   * @remarks
   * The connection ID, which is a system-generated UUID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  id?: string;
  /**
   * @remarks
   * The plugin ID.
   * 
   * @example
   * dingtalk
   */
  pluginId?: string;
  /**
   * @remarks
   * The remediation suggestion.
   * 
   * @example
   * Re-authorize the data source
   */
  remediation?: string;
  /**
   * @remarks
   * The authorization scope report.
   * 
   * @example
   * {}
   */
  scopeReport?: { [key: string]: any };
  /**
   * @remarks
   * The credential fingerprint.
   * 
   * @example
   * sha256:4b3b7b2e5f6a1c9d8e0f1234567890abcdef1234567890abcdef1234567890ab
   */
  secretFingerprint?: string;
  /**
   * @remarks
   * The credential update time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  secretUpdatedAt?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  updatedAt?: string;
  /**
   * @remarks
   * The verification time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  verifiedAt?: string;
  static names(): { [key: string]: string } {
    return {
      authKind: 'AuthKind',
      authState: 'AuthState',
      createdAt: 'CreatedAt',
      displayName: 'DisplayName',
      id: 'Id',
      pluginId: 'PluginId',
      remediation: 'Remediation',
      scopeReport: 'ScopeReport',
      secretFingerprint: 'SecretFingerprint',
      secretUpdatedAt: 'SecretUpdatedAt',
      updatedAt: 'UpdatedAt',
      verifiedAt: 'VerifiedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKind: 'string',
      authState: 'string',
      createdAt: 'string',
      displayName: 'string',
      id: 'string',
      pluginId: 'string',
      remediation: 'string',
      scopeReport: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      secretFingerprint: 'string',
      secretUpdatedAt: 'string',
      updatedAt: 'string',
      verifiedAt: 'string',
    };
  }

  validate() {
    if(this.scopeReport) {
      $dara.Model.validateMap(this.scopeReport);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextDatabaseSyncConnectionAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetContextDatabaseSyncConnectionAuthorizationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 1
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Sample value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * id-001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetContextDatabaseSyncConnectionAuthorizationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

