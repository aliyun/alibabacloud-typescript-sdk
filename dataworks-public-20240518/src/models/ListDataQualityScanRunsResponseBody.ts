// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityScanRunsResponseBodyPageInfoDataQualityScanRunsParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * dt
   */
  name?: string;
  /**
   * @remarks
   * The parameter value. You can use a scheduling time expression.
   * 
   * @example
   * $[yyyy-mm-dd-1]
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScanRunsResponseBodyPageInfoDataQualityScanRuns extends $dara.Model {
  /**
   * @remarks
   * The time when the data quality monitor starts running.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the data quality monitor stops.
   * 
   * @example
   * 1710239005403
   */
  finishTime?: number;
  /**
   * @remarks
   * The ID of the data quality monitor running record.
   * 
   * @example
   * 3155
   */
  id?: number;
  /**
   * @remarks
   * The parameters configured for the instance.
   */
  parameters?: ListDataQualityScanRunsResponseBodyPageInfoDataQualityScanRunsParameters[];
  /**
   * @remarks
   * The status of the instance.
   * 
   * *   Pass
   * *   Running
   * *   Error
   * *   Warn
   * *   Fail
   * 
   * @example
   * Fail
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      parameters: 'Parameters',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      finishTime: 'number',
      id: 'number',
      parameters: { 'type': 'array', 'itemType': ListDataQualityScanRunsResponseBodyPageInfoDataQualityScanRunsParameters },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScanRunsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The list of data quality monitor run records.
   */
  dataQualityScanRuns?: ListDataQualityScanRunsResponseBodyPageInfoDataQualityScanRuns[];
  /**
   * @remarks
   * The page number of the results. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records returned.
   * 
   * @example
   * 324
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityScanRuns: 'DataQualityScanRuns',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScanRuns: { 'type': 'array', 'itemType': ListDataQualityScanRunsResponseBodyPageInfoDataQualityScanRuns },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityScanRuns)) {
      $dara.Model.validateArray(this.dataQualityScanRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityScanRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page information.
   */
  pageInfo?: ListDataQualityScanRunsResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc14115***159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListDataQualityScanRunsResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

