// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationAuditLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in paging. The value starts from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query. This value is a UNIX timestamp in seconds. The value must be later than StartTime.
   * 
   * This parameter is required.
   * 
   * @example
   * 1787550343
   */
  endTime?: string;
  /**
   * @remarks
   * The event source type. Valid values:
   * - **console**: console call.
   * - **sdk**: SDK call.
   * 
   * @example
   * console
   */
  eventType?: string;
  /**
   * @remarks
   * The operation function module. The value is the English code of the function module. If other values are specified, no records are returned. Valid values:
   * - **PrivateAccess**: private access.
   * - **OfficeNetworkAccess**: office network access.
   * - **AppAcceleration**: application acceleration.
   * - **InternetAccess**: Internet access.
   * - **OfficeDataProtection**: office data protection.
   * - **IdentityAccessManagement**: identity and access management.
   * - **DeviceManagement**: device management.
   * - **ApprovalCenter**: approval center.
   * - **SoftwareManagement**: software management.
   * - **LogAnalysis**: log analysis.
   * - **Setting**: settings.
   * - **DigitalWatermark**: digital watermarking.
   * - **DynamicDecision**: dynamic decision.
   * - **InternetBehaviorManagement**: Internet behavior management.
   * - **AgentOfficeSecurity**: Agent office security.
   * - **NetworkAccess**: network access.
   * - **RiskManagement**: risk management.
   * - **EndpointProtection**: endpoint protection.
   * - **Overview**: overview page.
   * - **ITManagement**: IT management.
   * - **InstanceManagement**: instance management.
   * 
   * @example
   * OfficeDataProtection
   */
  operationFunc?: string;
  /**
   * @remarks
   * The operation status. Valid values:
   * - **success**: The operation succeeded. Equivalent values: true, 成功.
   * - **failure**: The operation failed. Equivalent values: fail, failed, false, 失败.
   * 
   * If this parameter is not specified, only successful operation records are returned.
   * 
   * @example
   * success
   */
  operationStatus?: string;
  /**
   * @remarks
   * The operation type. The value must exactly match the original operation type recorded in the log. The OperationType value in the response is localized based on the request language and may differ from this filter value.
   * 
   * @example
   * Sync classification rules
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
   * The number of entries per page. Settings: 1 to 100. Used in paging.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. This value is a UNIX timestamp in seconds. The value must be earlier than EndTime. The interval between StartTime and EndTime cannot exceed 30 days, and StartTime cannot be more than 31 days before the current time.
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

