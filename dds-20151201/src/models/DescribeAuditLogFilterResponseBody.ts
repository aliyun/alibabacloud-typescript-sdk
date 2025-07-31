// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogFilterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the audit log entries. Valid values:
   * 
   * *   **admin**: O\\&M and management operations
   * *   **slow**: slow query logs
   * *   **query**: query operations
   * *   **insert**: insert operations
   * *   **update**: update operations
   * *   **delete**: delete operations
   * *   **command**: protocol commands such as the aggregate method
   * 
   * @example
   * admin,slow,insert,query,update,delete,command
   */
  filter?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7BAFB0B3-2A54-5B65-B13E-3937CF08FEE6
   */
  requestId?: string;
  /**
   * @remarks
   * The role of the node.
   * 
   * @example
   * logic
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      requestId: 'RequestId',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      requestId: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

