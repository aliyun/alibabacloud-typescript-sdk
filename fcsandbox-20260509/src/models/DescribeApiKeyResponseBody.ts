// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiKey } from "./ApiKey";
import { EffectivePermissions } from "./EffectivePermissions";
import { IPConfig } from "./Ipconfig";
import { PermissionPolicy } from "./PermissionPolicy";


export class DescribeApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Bailian API key.
   * 
   * @example
   * asdfjoY87-9IUHH
   */
  apiKey?: ApiKey;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  effectivePermissions?: EffectivePermissions;
  ipBlacklist?: IPConfig[];
  /**
   * @remarks
   * The IP whitelist.
   */
  ipWhitelist?: IPConfig[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  permissionPolicy?: PermissionPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BCFAE0A-9FA9-5F72-8E8B-724632BC19A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      code: 'code',
      effectivePermissions: 'effectivePermissions',
      ipBlacklist: 'ipBlacklist',
      ipWhitelist: 'ipWhitelist',
      message: 'message',
      permissionPolicy: 'permissionPolicy',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: ApiKey,
      code: 'string',
      effectivePermissions: EffectivePermissions,
      ipBlacklist: { 'type': 'array', 'itemType': IPConfig },
      ipWhitelist: { 'type': 'array', 'itemType': IPConfig },
      message: 'string',
      permissionPolicy: PermissionPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiKey && typeof (this.apiKey as any).validate === 'function') {
      (this.apiKey as any).validate();
    }
    if(this.effectivePermissions && typeof (this.effectivePermissions as any).validate === 'function') {
      (this.effectivePermissions as any).validate();
    }
    if(Array.isArray(this.ipBlacklist)) {
      $dara.Model.validateArray(this.ipBlacklist);
    }
    if(Array.isArray(this.ipWhitelist)) {
      $dara.Model.validateArray(this.ipWhitelist);
    }
    if(this.permissionPolicy && typeof (this.permissionPolicy as any).validate === 'function') {
      (this.permissionPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

