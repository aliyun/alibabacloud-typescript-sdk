// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of modules.
   */
  modules?: string[];
  /**
   * @remarks
   * The internal code for the alert source.
   * 
   * @example
   * aliyun.siem.alert_datasource.sas
   */
  source?: string;
  /**
   * @remarks
   * The name of the alert source.
   * 
   * @example
   * sas
   */
  sourceName?: string;
  static names(): { [key: string]: string } {
    return {
      modules: 'Modules',
      source: 'Source',
      sourceName: 'SourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modules: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      sourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the response. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The list of alert sources.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertSourceResponseBodyData[];
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
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertSourceResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

