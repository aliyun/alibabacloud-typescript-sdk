// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuditLogRequest extends $dara.Model {
  /**
   * @remarks
   * The access source. Valid values:
   * - COMMON: Regular access.
   * - IMBEDDED: Embedded report.
   * - PUBLIC: Public report.
   * - IMBEDDED_COMPONENT: Embedded card.
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
   * The end date of the query. Format: yyyyMMdd.
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
   * - dataView: Access.
   * - function: Operation.
   * - permission: Permission.
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
   * The permission, access, or operation type. If this parameter is left empty, all types are queried by default. For more information, see the audit log code values. Separate multiple values with commas (,).
   * 
   * @example
   * MODIFY
   */
  operatorTypes?: string;
  /**
   * @remarks
   * The resource type. For more information, see the asset type.
   * 
   * @example
   * cube
   */
  resourceType?: string;
  /**
   * @remarks
   * The start date of the query. Format: yyyyMMdd. The date cannot be more than 90 days before the current date.
   * 
   * This parameter is required.
   * 
   * @example
   * 20240504
   */
  startDate?: string;
  /**
   * @remarks
   * The access device. Valid values:
   * - MOBILE: Mobile client.
   * - PC: PC client.
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
   * The ID of the workspace to which the logs to be queried belong.
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

