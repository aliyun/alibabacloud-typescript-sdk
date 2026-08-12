// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliYunSafeCenterResultShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Creates a node to query security alerting events triggered by the same rule or alerting type.
   */
  createSimilarSecurityEventsQueryTaskRequestShrink?: string;
  /**
   * @remarks
   * Queries the running status of ECS instances.
   */
  describeInstancesFullStatusRequestShrink?: string;
  /**
   * @remarks
   * Queries whether the list of security alerting events that match the same IP rule or same alerting type as the alerting event to be handled is empty.
   */
  describeSecurityEventOperationStatusRequestShrink?: string;
  /**
   * @remarks
   * Queries identical security alert events in Security Center.
   */
  describeSimilarSecurityEventsRequestShrink?: string;
  /**
   * @remarks
   * The request parameters for querying the Security Center Agent status.
   */
  getAssetDetailByUuidRequestShrink?: string;
  /**
   * @remarks
   * Handles security alert events.
   */
  handleSecurityEventsRequestShrink?: string;
  /**
   * @remarks
   * Handles security alert events in batches based on the same IP rule or type.
   */
  handleSimilarSecurityEventsRequestShrink?: string;
  /**
   * @remarks
   * The code of the public API operation.
   * 
   * - **GetAssetDetailByUuid**: Retrieves the Agent status. Request parameter: GetAssetDetailByUuidRequest.
   * 
   * - **DescribeSimilarSecurityEvents**: Retrieves the list of instance IDs for identical security alerting events. Request parameter: DescribeSimilarSecurityEventsRequest.
   * 
   * - **CreateSimilarSecurityEventsQueryTask**: Creates a node to query security alerting events triggered by the same rule or alerting type. Request parameter: CreateSimilarSecurityEventsQueryTaskRequest.
   * 
   * - **DescribeSecurityEventOperationStatus**: Queries whether the list of security alerting events that match the same IP rule or same alerting type as the alerting event to be handled is empty. Request parameter: DescribeSecurityEventOperationStatusRequest.
   * 
   * - **HandleSimilarSecurityEvents**: Handles security alerting events in batches based on the same IP rule or type. Request parameter: HandleSimilarSecurityEventsRequest.
   * HandleSecurityEvents: Handles security alerting events. Request parameter: HandleSecurityEventsRequest.
   * 
   * - **DescribeInstancesFullStatus**: Queries the running status of ECS instances. Request parameter: DescribeInstancesFullStatusRequest.
   * 
   * - **ListInstances**: Queries the running status of simple application servers. Request parameter: ListInstancesRequest.
   * 
   * - **StartConfigRuleEvaluation**: Re-evaluates security check rules.
   * 
   * > Each API operation name corresponds to its own request parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * ListInstanceStatus
   */
  interfaceCode?: string;
  /**
   * @remarks
   * Queries the running status of simple application servers.
   */
  listInstancesRequestShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-guangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createSimilarSecurityEventsQueryTaskRequestShrink: 'CreateSimilarSecurityEventsQueryTaskRequest',
      describeInstancesFullStatusRequestShrink: 'DescribeInstancesFullStatusRequest',
      describeSecurityEventOperationStatusRequestShrink: 'DescribeSecurityEventOperationStatusRequest',
      describeSimilarSecurityEventsRequestShrink: 'DescribeSimilarSecurityEventsRequest',
      getAssetDetailByUuidRequestShrink: 'GetAssetDetailByUuidRequest',
      handleSecurityEventsRequestShrink: 'HandleSecurityEventsRequest',
      handleSimilarSecurityEventsRequestShrink: 'HandleSimilarSecurityEventsRequest',
      interfaceCode: 'InterfaceCode',
      listInstancesRequestShrink: 'ListInstancesRequest',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSimilarSecurityEventsQueryTaskRequestShrink: 'string',
      describeInstancesFullStatusRequestShrink: 'string',
      describeSecurityEventOperationStatusRequestShrink: 'string',
      describeSimilarSecurityEventsRequestShrink: 'string',
      getAssetDetailByUuidRequestShrink: 'string',
      handleSecurityEventsRequestShrink: 'string',
      handleSimilarSecurityEventsRequestShrink: 'string',
      interfaceCode: 'string',
      listInstancesRequestShrink: 'string',
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

