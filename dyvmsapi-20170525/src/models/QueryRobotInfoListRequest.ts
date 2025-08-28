// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRobotInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * The review state. Valid values:
   * 
   * *   **CONFIGURABLE**
   * *   **AUDITING**
   * *   **AUDITPASS**
   * *   **AUDITFAIL**
   * 
   * @example
   * AUDITING
   */
  auditStatus?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

