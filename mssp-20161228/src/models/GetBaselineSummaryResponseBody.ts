// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineSummaryResponseBodyDataTrendDTOList extends $dara.Model {
  /**
   * @remarks
   * Date point.
   * 
   * @example
   * 202408或者20240801
   */
  date?: string;
  /**
   * @remarks
   * Number of processed items.
   * 
   * @example
   * 10
   */
  dealCount?: number;
  /**
   * @remarks
   * Number of discovered items.
   * 
   * @example
   * 12
   */
  findCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dealCount: 'DealCount',
      findCount: 'FindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dealCount: 'number',
      findCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Collection of baseline statistical data.
   */
  trendDTOList?: GetBaselineSummaryResponseBodyDataTrendDTOList[];
  static names(): { [key: string]: string } {
    return {
      trendDTOList: 'TrendDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trendDTOList: { 'type': 'array', 'itemType': GetBaselineSummaryResponseBodyDataTrendDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.trendDTOList)) {
      $dara.Model.validateArray(this.trendDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaselineSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetBaselineSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 67D61738-5E38-5164-947A-34E3850D493A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Values: true: success; false: failure.
   * 
   * @example
   * true
   */
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
      data: GetBaselineSummaryResponseBodyData,
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

