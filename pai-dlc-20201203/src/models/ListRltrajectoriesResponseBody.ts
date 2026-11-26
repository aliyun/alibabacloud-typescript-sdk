// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLTrajectory } from "./Rltrajectory";


export class ListRLTrajectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 作业 ID
   * 
   * @example
   * dlc********
   */
  jobId?: string;
  /**
   * @remarks
   * 生效的页码；未传分页参数时为默认值 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 生效的每页条数；未传分页参数时为默认值 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 样本 uid
   * 
   * @example
   * 3afcfbdf-3956-4ab2-b9cb-f9c204b8fc9c
   */
  promptUid?: string;
  /**
   * @remarks
   * 请求 ID
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * 指定 PromptUid 下分页前的轨迹总数，不是当前页条数。查询规模受限时可能仅为下界，不保证是精确总数。
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * 轨迹列表（当前页，按 SampleIndex 数值升序）
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

