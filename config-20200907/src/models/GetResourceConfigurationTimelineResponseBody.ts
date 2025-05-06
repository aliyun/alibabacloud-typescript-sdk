// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline } from "./GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline";


export class GetResourceConfigurationTimelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ED9CD1B3-286C-4E05-A765-5E1E0B9BC2AB
   */
  requestId?: string;
  /**
   * @remarks
   * The configuration timeline of the resource.
   */
  resourceConfigurationTimeline?: GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceConfigurationTimeline: 'ResourceConfigurationTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceConfigurationTimeline: GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline,
    };
  }

  validate() {
    if(this.resourceConfigurationTimeline && typeof (this.resourceConfigurationTimeline as any).validate === 'function') {
      (this.resourceConfigurationTimeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

