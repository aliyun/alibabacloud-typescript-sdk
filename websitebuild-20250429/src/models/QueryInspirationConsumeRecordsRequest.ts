// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationConsumeRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Query end time
   * 
   * @example
   * 1762999521
   */
  endTime?: string;
  /**
   * @remarks
   * Sorting field
   * 
   * @example
   * CreationTime
   */
  orderColumn?: string;
  /**
   * @remarks
   * Sorting type: ASC or DESC
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * Page number, default is 1
   * 
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size, default is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Scenario Name.
   * 
   * @example
   * 百灵鸟-人员认证
   */
  sceneName?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2025-10-19T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sceneName: 'SceneName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sceneName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

