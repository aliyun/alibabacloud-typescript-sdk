// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProtectionPolicyApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The application status.
   * 
   * @example
   * FAILED
   */
  applyStatus?: string;
  /**
   * @remarks
   * The maximum number of results to return in a single page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. The response returns a `NextToken` value only when more results are available. To retrieve the next page, include the `NextToken` from the previous response in your request. If the response does not include a `NextToken` value, all results have been retrieved.
   * 
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The sub-protection policy type.
   * 
   * @example
   * ECS_AUTO_SNAPSHOT_POLICY
   */
  subProtectionPolicyType?: string;
  /**
   * @remarks
   * The task ID. You can call the DescribeTasks operation to query task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * t-0004d9ctt1ii********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      applyStatus: 'ApplyStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
      subProtectionPolicyType: 'SubProtectionPolicyType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
      subProtectionPolicyType: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

