// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementList extends $dara.Model {
  /**
   * @example
   * task-started
   */
  event?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent;
  /**
   * @example
   * xx
   */
  location?: string;
  /**
   * @example
   * xx
   */
  people?: string;
  /**
   * @example
   * 时间
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      location: 'Location',
      people: 'People',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent,
      location: 'string',
      people: 'string',
      time: 'string',
    };
  }

  validate() {
    if(this.event && typeof (this.event as any).validate === 'function') {
      (this.event as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

