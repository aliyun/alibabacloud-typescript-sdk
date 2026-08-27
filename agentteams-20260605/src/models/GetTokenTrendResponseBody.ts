// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenTrendResponseBodyDataSeries extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: any[];
  /**
   * @remarks
   * The series name.
   * 
   * @example
   * input_tokens
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The grouping dimension.
   * 
   * @example
   * day
   */
  groupBy?: string;
  /**
   * @remarks
   * The trend data series.
   * 
   * @example
   * [...]
   */
  series?: GetTokenTrendResponseBodyDataSeries[];
  static names(): { [key: string]: string } {
    return {
      groupBy: 'GroupBy',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupBy: 'string',
      series: { 'type': 'array', 'itemType': GetTokenTrendResponseBodyDataSeries },
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: GetTokenTrendResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: GetTokenTrendResponseBodyData,
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

