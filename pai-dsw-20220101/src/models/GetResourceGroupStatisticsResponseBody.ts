// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupStatisticsResponseBody extends $dara.Model {
  /**
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  statistics?: { [key: string]: {[key: string]: any} };
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      statistics: 'Statistics',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      statistics: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      success: 'boolean',
    };
  }

  validate() {
    if(this.statistics) {
      $dara.Model.validateMap(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

