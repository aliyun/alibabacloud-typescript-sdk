// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLSampleEvent } from "./RlsampleEvent";


export class GetRLSampleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event stream sorted in ascending order by time.
   */
  events?: RLSampleEvent[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc5yfk7eyg95lac
   */
  jobId?: string;
  /**
   * @remarks
   * The sample UID.
   * 
   * @example
   * 3afcfbdf-3956-4ab2-b9cb-f9c204b8fc9c
   */
  promptUid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The trajectory index.
   * 
   * @example
   * 14
   */
  sampleIndex?: string;
  /**
   * @remarks
   * The total number of returned events.
   * 
   * @example
   * 116
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      jobId: 'JobId',
      promptUid: 'PromptUid',
      requestId: 'RequestId',
      sampleIndex: 'SampleIndex',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': RLSampleEvent },
      jobId: 'string',
      promptUid: 'string',
      requestId: 'string',
      sampleIndex: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

