// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The Medusa code of the log source for the rule.
   * 
   * @example
   * sas.cloudsiem.prod.cloud_siem_aegis_sas_alert
   */
  logSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      logSource: 'LogSource',
      logSourceName: 'LogSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logSource: 'string',
      logSourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeLogSourceResponseBodyData[];
  /**
   * @remarks
   * The message returned.
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
   * - true: The request was successful.
   * 
   * - false: The request failed.
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
      data: { 'type': 'array', 'itemType': DescribeLogSourceResponseBodyData },
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

