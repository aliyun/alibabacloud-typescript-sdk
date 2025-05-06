// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobRunsResponseBodyJobRuns } from "./ListJobRunsResponseBodyJobRuns";


export class ListJobRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Spark jobs.
   */
  jobRuns?: ListJobRunsResponseBodyJobRuns[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobRuns: 'jobRuns',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRuns: { 'type': 'array', 'itemType': ListJobRunsResponseBodyJobRuns },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobRuns)) {
      $dara.Model.validateArray(this.jobRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

