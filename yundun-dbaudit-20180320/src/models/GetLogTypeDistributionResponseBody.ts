// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogTypeDistributionResponseBodyTimeList extends $dara.Model {
  /**
   * @example
   * 2019-06-06 00:00:00
   */
  beginDate?: string;
  /**
   * @example
   * 10000
   */
  deleteSqlCount?: number;
  /**
   * @example
   * 2019-06-06 01:00:00
   */
  endDate?: string;
  /**
   * @example
   * 500000
   */
  execCostUS?: string;
  /**
   * @example
   * 10000
   */
  insertSqlCount?: number;
  /**
   * @example
   * 10000
   */
  otherSqlCount?: number;
  /**
   * @example
   * 10000
   */
  selectSqlCount?: number;
  /**
   * @example
   * 50000
   */
  sqlCount?: number;
  /**
   * @example
   * 10000
   */
  updateSqlCount?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      deleteSqlCount: 'DeleteSqlCount',
      endDate: 'EndDate',
      execCostUS: 'ExecCostUS',
      insertSqlCount: 'InsertSqlCount',
      otherSqlCount: 'OtherSqlCount',
      selectSqlCount: 'SelectSqlCount',
      sqlCount: 'SqlCount',
      updateSqlCount: 'UpdateSqlCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      deleteSqlCount: 'number',
      endDate: 'string',
      execCostUS: 'string',
      insertSqlCount: 'number',
      otherSqlCount: 'number',
      selectSqlCount: 'number',
      sqlCount: 'number',
      updateSqlCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTypeDistributionResponseBody extends $dara.Model {
  /**
   * @example
   * 8EC13467-A84C-401F-A4A0-AF893066FBA1
   */
  requestId?: string;
  timeList?: GetLogTypeDistributionResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetLogTypeDistributionResponseBodyTimeList },
    };
  }

  validate() {
    if(Array.isArray(this.timeList)) {
      $dara.Model.validateArray(this.timeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

