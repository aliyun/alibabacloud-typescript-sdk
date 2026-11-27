// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLSample } from "./Rlsample";


export class ListRLSamplesResponseBody extends $dara.Model {
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
   * The effective page number. If pagination parameters are not specified, the default value 1 is used.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The effective number of entries per page. If pagination parameters are not specified, the default value 10 is used.
   * 
   * @example
   * 50
   */
  pageSize?: number;
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
   * The list of trajectories on the current page.
   */
  samples?: RLSample[];
  /**
   * @remarks
   * The total number of trajectories within the window before pagination. If Truncated is set to true, this value represents a lower bound rather than the exact total count.
   * 
   * @example
   * 21596
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      samples: 'Samples',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      samples: { 'type': 'array', 'itemType': RLSample },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.samples)) {
      $dara.Model.validateArray(this.samples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

