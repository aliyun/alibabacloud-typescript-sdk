// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSqlAuditRequest extends $dara.Model {
  /**
   * @example
   * test_daa
   */
  auditAccountName?: string;
  /**
   * @example
   * Pw@11111
   */
  auditAccountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      auditAccountName: 'AuditAccountName',
      auditAccountPassword: 'AuditAccountPassword',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditAccountName: 'string',
      auditAccountPassword: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

