// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuditLogRequest extends $dara.Model {
  /**
   * @remarks
   * The access source. Valid values:
   * 
   * - COMMON: standard access
   * 
   * - IMBEDDED: embedded report
   * 
   * - PUBLIC: public report
   * 
   * - IMBEDDED_COMPONENT: embedded card
   * 
   * @example
   * PUBLIC
   * 
   * **if can be null:**
   * true
   */
  accessSourceFlag?: string;
  /**
   * @remarks
   * The end date for the query. Use the yyyyMMdd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240604
   */
  endDate?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * - dataView: access logs
   * 
   * - function: operation logs
   * 
   * - permission: permission logs
   * 
   * This parameter is required.
   * 
   * @example
   * function
   */
  logType?: string;
  /**
   * @remarks
   * The user ID of the operator.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0***
   */
  operatorId?: string;
  /**
   * @remarks
   * The permission, access, or operation type. If left empty, all types are queried by default.
   * 
   * For valid values, see audit log codes. To specify multiple types, separate them with commas.
   * 
   * @example
   * MODIFY
   */
  operatorTypes?: string;
  /**
   * @remarks
   * The resource type. For more information, see work types.
   * 
   * @example
   * cube
   */
  resourceType?: string;
  /**
   * @remarks
   * The start date for the query. Use the yyyyMMdd format. The date cannot be more than 90 days before the current date.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240504
   */
  startDate?: string;
  /**
   * @remarks
   * The device used for access. Valid values:
   * 
   * - MOBILE: mobile device
   * 
   * - PC: PC
   * 
   * @example
   * PC
   * 
   * **if can be null:**
   * true
   */
  userAccessDevice?: string;
  /**
   * @remarks
   * The ID of the workspace that contains the logs to query.
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

