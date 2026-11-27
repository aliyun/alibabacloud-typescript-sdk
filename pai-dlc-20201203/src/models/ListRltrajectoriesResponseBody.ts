// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLTrajectory } from "./Rltrajectory";


export class ListRLTrajectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @remarks
   * The effective page number. If pagination parameters are not provided, the default value 1 is used.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The effective number of entries per page. If pagination parameters are not provided, the default value 10 is used.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The total number of trajectories under this UID before pagination. This is an exact value, and represents a lower bound only when Truncated is true.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of trajectories on the current page, sorted in ascending order by SampleIndex.
   */
  trajectories?: RLTrajectory[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      promptUid: 'PromptUid',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trajectories: 'Trajectories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      promptUid: 'string',
      requestId: 'string',
      totalCount: 'number',
      trajectories: { 'type': 'array', 'itemType': RLTrajectory },
    };
  }

  validate() {
    if(Array.isArray(this.trajectories)) {
      $dara.Model.validateArray(this.trajectories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

