// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRLTrajectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210114104214-vf9lowjt3pso
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
   * The number of turn rows. The maximum number of turns per trajectory is 100.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The raw rows of sgl-metric for each turn. The schema is dynamic and retains the Logstore column names. JSON strings are parsed back into objects, and system fields with the __ prefix are excluded.
   */
  turns?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      promptUid: 'PromptUid',
      requestId: 'RequestId',
      sampleIndex: 'SampleIndex',
      totalCount: 'TotalCount',
      turns: 'Turns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      promptUid: 'string',
      requestId: 'string',
      sampleIndex: 'string',
      totalCount: 'number',
      turns: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.turns)) {
      $dara.Model.validateArray(this.turns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

