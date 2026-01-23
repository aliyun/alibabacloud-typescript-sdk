// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardStatisticsResponseBodyDataStandardTypeCountList extends $dara.Model {
  /**
   * @example
   * 11
   */
  count?: number;
  /**
   * @example
   * test
   */
  standardType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      standardType: 'StandardType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      standardType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardStatisticsResponseBodyData extends $dara.Model {
  standardTypeCountList?: GetStandardStatisticsResponseBodyDataStandardTypeCountList[];
  /**
   * @example
   * 101
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      standardTypeCountList: 'StandardTypeCountList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardTypeCountList: { 'type': 'array', 'itemType': GetStandardStatisticsResponseBodyDataStandardTypeCountList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.standardTypeCountList)) {
      $dara.Model.validateArray(this.standardTypeCountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardStatisticsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetStandardStatisticsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetStandardStatisticsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

