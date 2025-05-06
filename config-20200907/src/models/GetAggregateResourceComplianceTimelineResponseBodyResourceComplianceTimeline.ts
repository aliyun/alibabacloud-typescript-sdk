// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList } from "./GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList";


export class GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline extends $dara.Model {
  /**
   * @remarks
   * The status of the resource. The parameter value varies based on the resource type and may be left empty. Examples:
   * 
   * *   If the value of the ResourceType parameter is ACS::ECS::Instance, the resource is an Elastic Compute Service (ECS) instance that has a specific state. In this case, the valid values of this parameter are Running and Stopped.
   * *   If the value of the ResourceType parameter is ACS::OSS::Bucket, the resource is an Object Storage Service (OSS) bucket that is not in a specific state. In this case, this parameter is empty.
   */
  complianceList?: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  /**
   * @remarks
   * The maximum number of entries returned for a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 5OVS5J4I1/UKTkHV5oNs****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      complianceList: 'ComplianceList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceList: { 'type': 'array', 'itemType': GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.complianceList)) {
      $dara.Model.validateArray(this.complianceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

