// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationAuditLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page for a paged query. Pages start from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds. The value must be later than StartTime.
   * 
   * This parameter is required.
   * 
   * @example
   * 1787550343
   */
  endTime?: string;
  /**
   * @remarks
   * The source type of the event. Valid values:
   * - **console**: The event is triggered by a console call.
   * - **sdk**: The event is triggered by an SDK call.
   * 
   * @example
   * console
   */
  eventType?: string;
  /**
   * @remarks
   * The operation feature module. The value must be the English code of the feature module. If you specify other values, no records are queried. Valid values:
   * - **PrivateAccess**: internal network access
   * - **OfficeNetworkAccess**: office network access
   * - **AppAcceleration**: application acceleration
   * - **InternetAccess**: Internet access
   * - **OfficeDataProtection**: office data protection
   * - **IdentityAccessManagement**: identity and access management
   * - **DeviceManagement**: endpoint management
   * - **ApprovalCenter**: approval center
   * - **SoftwareManagement**: software management
   * - **LogAnalysis**: log analysis
   * - **Setting**: settings
   * - **DigitalWatermark**: digital watermarking
   * - **DynamicDecision**: dynamic decision-making
   * - **InternetBehaviorManagement**: Internet behavior management
   * - **AgentOfficeSecurity**: agent office security
   * - **NetworkAccess**: network access
   * - **RiskManagement**: risk management
   * - **EndpointProtection**: endpoint protection
   * - **Overview**: overview page
   * - **ITManagement**: IT management
   * - **InstanceManagement**: instance management
   * 
   * @example
   * OfficeDataProtection
   */
  operationFunc?: string;
  /**
   * @remarks
   * The operation status. Valid values:
   * - **success**: The operation is successful. Equivalent values are true and Success.
   * - **failure**: The operation fails. Equivalent values are fail, failed, false, and Failure.
   * 
   * If this parameter is not specified, only records of successful operations are returned.
   * 
   * @example
   * success
   */
  operationStatus?: string;
  /**
   * @remarks
   * The operation type. The value must be exactly the same as the original operation type recorded in the log. The OperationType in the returned result is localized based on the request language and may differ from this filter value.
   * 
   * @example
   * Synchronize classification and grading rules
   */
  operationType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID (AliUid) of the operator.
   * 
   * @example
   * 1234****
   */
  operatorId?: string;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds. The value must be earlier than EndTime. The interval between StartTime and EndTime cannot exceed 30 days, and StartTime cannot be more than 31 days before the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1786945543
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      eventType: 'EventType',
      operationFunc: 'OperationFunc',
      operationStatus: 'OperationStatus',
      operationType: 'OperationType',
      operatorId: 'OperatorId',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'string',
      eventType: 'string',
      operationFunc: 'string',
      operationStatus: 'string',
      operationType: 'string',
      operatorId: 'string',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

