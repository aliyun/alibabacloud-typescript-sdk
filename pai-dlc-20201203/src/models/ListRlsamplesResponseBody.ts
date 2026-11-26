// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLSample } from "./Rlsample";


export class ListRLSamplesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 作业 ID
   * 
   * @example
   * dlc5yfk7eyg95lac
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
   * 50
   */
  pageSize?: number;
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
   * 当前页的样本轨迹概览，按 PromptUid 字典序、SampleIndex 数值升序排列。
   */
  samples?: RLSample[];
  /**
   * @remarks
   * 分页前的匹配轨迹总数，不是当前页条数。查询规模受限时可能仅为下界，不保证是精确总数。
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

