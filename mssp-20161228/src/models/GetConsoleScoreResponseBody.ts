// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsoleScoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   * 
   * @example
   * {
   *     "score": "94.00",
   *     "consoleScoreTrendDTOS": [
   *         {
   *             "date": "20241009",
   *             "score": "100.0"
   *         }
   *     ],
   *     "cyclicYearOverYear": "-6.00",
   *     "recordDate": "20241209",
   *     "weeklyYearOverYear": "1.62",
   *     "aboveWholeNetworkUserRatio": "6.25",
   *     "aliUid": "1601097845544644",
   *     "detailJson": "[{\\"detailDTO\\":[{\\"count\\":0,\\"itemName\\":\\"应用漏洞POC验证\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"未授权访问漏洞（公网暴露）\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"后台弱口令漏洞（公网暴露）\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"文件上传漏洞（公网暴露）\\",\\"mark\\":\\"1\\"}],\\"markRate\\":\\"0.5\\",\\"markType\\":\\"vul\\"},{\\"detailDTO\\":[{\\"count\\":12,\\"itemName\\":\\"WAF3.0回源配置不正确\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"AK泄露检查未开启\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"DNAT管理端口开放\\",\\"mark\\":\\"1\\"},{\\"count\\":0,\\"itemName\\":\\"高危端口暴露\\",\\"mark\\":\\"0.5\\"}],\\"markRate\\":\\"0.5\\",\\"markType\\":\\"risk\\"}]"
   * }
   */
  data?: any;
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
   * Prompt message for the result returned.
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
   * D0937B0F-9180-5F70-B6ED-0BA22591627F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. true means success, false means failure.
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
      data: 'any',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

