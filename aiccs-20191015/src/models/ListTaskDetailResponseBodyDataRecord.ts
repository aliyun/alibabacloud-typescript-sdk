// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskDetailResponseBodyDataRecord extends $dara.Model {
  /**
   * @example
   * 186****0000
   */
  called?: string;
  /**
   * @example
   * 136****0000
   */
  caller?: string;
  direction?: string;
  /**
   * @example
   * 30
   */
  duration?: number;
  /**
   * @example
   * 2021-05-20 00:03:00
   */
  endTime?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * 1
   */
  retryCurTimes?: number;
  /**
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @example
   * 2021-05-20 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 00001
   */
  statusCode?: string;
  statusCodeDesc?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      caller: 'Caller',
      direction: 'Direction',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      retryCurTimes: 'RetryCurTimes',
      retryTimes: 'RetryTimes',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      statusCodeDesc: 'StatusCodeDesc',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      caller: 'string',
      direction: 'string',
      duration: 'number',
      endTime: 'string',
      id: 'number',
      retryCurTimes: 'number',
      retryTimes: 'number',
      startTime: 'string',
      status: 'string',
      statusCode: 'string',
      statusCodeDesc: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

