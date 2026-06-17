// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1753804800
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
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
   * 3389
   */
  port?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * 2
   */
  riskLevel?: string;
  /**
   * @remarks
   * The name of the application for an exact match. If you do not specify this parameter, all applications are queried.
   * 
   * @example
   * SMB
   */
  serviceName?: string;
  /**
   * @remarks
   * The name of the application for a fuzzy match. If you do not specify this parameter, all applications are queried.
   * 
   * @example
   * SMB
   */
  serviceNameFuzzy?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 122.200.64.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start of the time range to query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1755742107
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

