// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > A status code of 200 indicates that the operation was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detection logs of the one-time detection task.
   * 
   * @example
   * [{\\"redirectCount\\":0.0,\\"SSLConnectTime\\":0.0,\\"pingDetail\\":\\"\\",\\"HTTPConnectTime\\":0.0,\\"isp\\":\\"465\\",\\"errorCode\\":611,\\"ispCN\\":\\"阿里巴巴\\",\\"resolution\\":\\"\\",\\"areaEN\\":\\"HuaBei\\",\\"taskEndTimestamp\\":1638422475687,\\"targetIspEN\\":\\"\\",\\"TotalTime\\":1.0,\\"taskStartTimestamp\\":1638422474389,\\"countryCN\\":\\"中国\\",\\"provinceEN\\":\\"Beijing\\",\\"countryEN\\":\\"China\\",\\"targetCityEN\\":\\"\\",\\"curlConnectTime\\":0.0,\\"ips\\":\\"\\",\\"route\\":\\"\\",\\"tcpConnectTime\\":0.0,\\"cityEN\\":\\"Beijing\\",\\"HTTPDownloadSpeed\\":0.0,\\"HTTPDownloadTime\\":0.0,\\"HTTPResponseCode\\":0.0,\\"areaCN\\":\\"华北\\",\\"city\\":\\"546\\",\\"expection\\":\\"\\",\\"suorceIp\\":\\"192.168.XX.XX \\",\\"ispEN\\":\\"Alibaba\\",\\"HTTPDNSTime\\":1.0,\\"targetIsp\\":\\"\\",\\"curlStarttransferTime\\":0.0,\\"provinceCN\\":\\"北京市\\",\\"timestamp\\":1638422474000,\\"redirectTime\\":0.0,\\"targetCity\\":\\"\\", \\"expect\\":\\"\\",\\"HTTPDownloadSize\\":0.0,\\"localDns\\":\\"192.168.XX.XX\\",\\"cityCN\\":\\"北京市\\",\\"taskId\\":\\"afa5c3ce-f944-4363-9edb-ce919a29****\\"}]
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The token that is used to query the next page.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67F646FA-ED8A-58C2-B461-451DB52C8B14
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

