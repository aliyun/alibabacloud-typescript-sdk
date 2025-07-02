// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuditLogRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  accessSourceFlag?: string;
  /**
   * @remarks
   * End date of the query, format ("yyyyMMdd").
   * 
   * This parameter is required.
   * 
   * @example
   * 20240604
   */
  endDate?: string;
  /**
   * @remarks
   * Log type:
   * - dataView - Access
   * - function - Operation
   * - permission - Permission
   * 
   * This parameter is required.
   * 
   * @example
   * function
   */
  logType?: string;
  /**
   * @remarks
   * Operator\\"s user ID.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0***
   */
  operatorId?: string;
  /**
   * @remarks
   * Permission/Access/Operation type, empty - default all;
   * 
   * Refer to the audit log code values, send multiple values separated by English commas.
   * 
   * @example
   * MODIFY
   */
  operatorTypes?: string;
  /**
   * @remarks
   * Resource type, refer to the work type.
   * 
   * @example
   * cube
   */
  resourceType?: string;
  /**
   * @remarks
   * Start date of the query, format ("yyyyMMdd"), cannot be earlier than 90 days from the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240504
   */
  startDate?: string;
  /**
   * **if can be null:**
   * true
   */
  userAccessDevice?: string;
  /**
   * @remarks
   * Workspace ID, the ID of the workspace to which the logs to be queried belong.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessSourceFlag: 'AccessSourceFlag',
      endDate: 'EndDate',
      logType: 'LogType',
      operatorId: 'OperatorId',
      operatorTypes: 'OperatorTypes',
      resourceType: 'ResourceType',
      startDate: 'StartDate',
      userAccessDevice: 'UserAccessDevice',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessSourceFlag: 'string',
      endDate: 'string',
      logType: 'string',
      operatorId: 'string',
      operatorTypes: 'string',
      resourceType: 'string',
      startDate: 'string',
      userAccessDevice: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

