// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLPlanResponseBodyDetail } from "./DescribeSqlplanResponseBodyDetail";
import { DescribeSQLPlanResponseBodyStageList } from "./DescribeSqlplanResponseBodyStageList";


export class DescribeSQLPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution information about the SQL statement.
   */
  detail?: DescribeSQLPlanResponseBodyDetail;
  /**
   * @remarks
   * The original information about the SQL statement.
   * 
   * @example
   * {\\"queryId\\":\\"20210527_160443_10581_hdhzr\\",\\"session\\":{\\"queryId\\":\\"20210527_160443_10581_hdhzr\\",\\"hasSharedStage\\":false,\\"parentId\\":0}}
   */
  originInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22D6DEF0-CBC7-4388-A41C-D5FD62******
   */
  requestId?: string;
  /**
   * @remarks
   * The queried plan in different stages.
   */
  stageList?: DescribeSQLPlanResponseBodyStageList[];
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      originInfo: 'OriginInfo',
      requestId: 'RequestId',
      stageList: 'StageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: DescribeSQLPlanResponseBodyDetail,
      originInfo: 'string',
      requestId: 'string',
      stageList: { 'type': 'array', 'itemType': DescribeSQLPlanResponseBodyStageList },
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    if(Array.isArray(this.stageList)) {
      $dara.Model.validateArray(this.stageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

