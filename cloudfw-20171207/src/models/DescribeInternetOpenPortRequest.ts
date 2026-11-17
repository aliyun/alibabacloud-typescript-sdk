// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenPortRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for paging.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1748358644
   */
  endTime?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page for paging.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @remarks
   * The application name. Exact match. If this parameter is not specified, all applications are queried.
   * 
   * @example
   * SMB
   */
  serviceName?: string;
  /**
   * @remarks
   * The application name. Fuzzy match. If this parameter is not specified, all applications are queried.
   * 
   * @example
   * SMB
   */
  serviceNameFuzzy?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 114.242.33.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735264800
   */
  startTime?: string;
  /**
   * @remarks
   * The recommended policy level.
   * 
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

