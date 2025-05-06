// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList } from "./GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList";


export class GetResourceComplianceTimelineResponseBodyResourceComplianceTimeline extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation records on the compliance timeline.
   */
  complianceList?: GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  /**
   * @remarks
   * The maximum number of entries that can be returned for a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request.
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
      complianceList: { 'type': 'array', 'itemType': GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList },
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

