// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenPortRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * 1748358644
   */
  endTime?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 80
   */
  port?: string;
  /**
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @example
   * SMB
   */
  serviceName?: string;
  /**
   * @example
   * SMB
   */
  serviceNameFuzzy?: string;
  /**
   * @example
   * 114.242.33.XXX
   */
  sourceIp?: string;
  /**
   * @example
   * 1735264800
   */
  startTime?: string;
  /**
   * @example
   * 10
   */
  suggestLevel?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      port: 'Port',
      riskLevel: 'RiskLevel',
      serviceName: 'ServiceName',
      serviceNameFuzzy: 'ServiceNameFuzzy',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      suggestLevel: 'SuggestLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      endTime: 'string',
      lang: 'string',
      pageSize: 'string',
      port: 'string',
      riskLevel: 'string',
      serviceName: 'string',
      serviceNameFuzzy: 'string',
      sourceIp: 'string',
      startTime: 'string',
      suggestLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

