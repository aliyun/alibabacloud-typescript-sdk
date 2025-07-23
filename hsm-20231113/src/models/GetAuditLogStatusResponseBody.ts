// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditLogStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the audit log feature is enabled. Valid values:
   * 
   * *   enable
   * *   disable
   * 
   * @example
   * enable
   */
  auditLogStatus?: string;
  /**
   * @remarks
   * The bucket that stores audit logs.
   * 
   * @example
   * bucket-test
   */
  auditOssBucket?: string;
  /**
   * @remarks
   * Indicates whether Cloud Hardware Security Module is authorized to deliver logs. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  grantedServiceAccess?: boolean;
  /**
   * @remarks
   * A list of buckets that can be used to store audit logs.
   */
  ossBuckets?: string[];
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditLogStatus: 'AuditLogStatus',
      auditOssBucket: 'AuditOssBucket',
      grantedServiceAccess: 'GrantedServiceAccess',
      ossBuckets: 'OssBuckets',
      regionId: 'RegionId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditLogStatus: 'string',
      auditOssBucket: 'string',
      grantedServiceAccess: 'boolean',
      ossBuckets: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.ossBuckets)) {
      $dara.Model.validateArray(this.ossBuckets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

