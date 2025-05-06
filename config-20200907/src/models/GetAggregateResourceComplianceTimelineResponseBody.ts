// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline } from "./GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline";


export class GetAggregateResourceComplianceTimelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D53A78F-1EB8-4264-A554-72F07E34FAE6
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the compliance timeline.
   */
  resourceComplianceTimeline?: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceTimeline: 'ResourceComplianceTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceTimeline: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline,
    };
  }

  validate() {
    if(this.resourceComplianceTimeline && typeof (this.resourceComplianceTimeline as any).validate === 'function') {
      (this.resourceComplianceTimeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

