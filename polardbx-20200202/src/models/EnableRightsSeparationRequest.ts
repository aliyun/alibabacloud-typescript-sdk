// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableRightsSeparationRequest extends $dara.Model {
  /**
   * @example
   * test123
   */
  auditAccountDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * account_audit
   */
  auditAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ******
   */
  auditAccountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-htri0ori2r4k9p
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * test123
   */
  securityAccountDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * account_sec
   */
  securityAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *****
   */
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      auditAccountDescription: 'AuditAccountDescription',
      auditAccountName: 'AuditAccountName',
      auditAccountPassword: 'AuditAccountPassword',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      securityAccountDescription: 'SecurityAccountDescription',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditAccountDescription: 'string',
      auditAccountName: 'string',
      auditAccountPassword: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
      securityAccountDescription: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

