// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePxfsAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarDB-X instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The identity name.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-runtime
   */
  identityName?: string;
  /**
   * @remarks
   * The token label.
   * 
   * @example
   * production-agent
   */
  label?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tenant-001
   */
  tenantId?: string;
  /**
   * @remarks
   * The validity period of the token, in seconds.
   * 
   * @example
   * 86400
   */
  ttlSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      identityName: 'IdentityName',
      label: 'Label',
      regionId: 'RegionId',
      tenantId: 'TenantId',
      ttlSeconds: 'TtlSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      identityName: 'string',
      label: 'string',
      regionId: 'string',
      tenantId: 'string',
      ttlSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

