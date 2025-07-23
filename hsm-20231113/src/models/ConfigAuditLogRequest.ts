// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigAuditLogRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the audit log feature. Valid values:
   * 
   * *   enable
   * *   disable
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  auditAction?: string;
  /**
   * @remarks
   * The bucket to which audit logs are delivered.
   * 
   * @example
   * hsm-log
   */
  auditOssBucket?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      auditAction: 'AuditAction',
      auditOssBucket: 'AuditOssBucket',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditAction: 'string',
      auditOssBucket: 'string',
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

