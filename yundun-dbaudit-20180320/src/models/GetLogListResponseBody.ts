// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogListResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 100
   */
  affectRows?: number;
  /**
   * @example
   * 8.8.XX.XX
   */
  appClientIp?: string;
  /**
   * @example
   * zhangsan
   */
  appUsername?: string;
  /**
   * @example
   * 2019-06-06 00:00:00
   */
  captureTime?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  clientIp?: string;
  clientIpAlias?: string;
  /**
   * @example
   * 00163E06****
   */
  clientMac?: string;
  /**
   * @example
   * administrator
   */
  clientOsUser?: string;
  /**
   * @example
   * 15629
   */
  clientPort?: number;
  /**
   * @example
   * navicat
   */
  clientProgram?: string;
  /**
   * @example
   * 1
   */
  dbId?: number;
  /**
   * @example
   * 192.168.XX.XX:3306
   */
  dbServer?: string;
  /**
   * @example
   * root
   */
  dbUser?: string;
  /**
   * @example
   * 1000
   */
  execCostUS?: number;
  /**
   * @example
   * 2000
   */
  fetchCostUS?: number;
  /**
   * @example
   * orcl
   */
  instName?: string;
  /**
   * @example
   * 0
   */
  responseCode?: string;
  /**
   * @example
   * Table \\"your_table\\" doesn\\"t exist
   */
  responseText?: string;
  /**
   * @example
   * 0
   */
  riskLevel?: number;
  /**
   * @example
   * 50****
   */
  ruleId?: number;
  /**
   * @example
   * 50****
   */
  ruleKeyId?: number;
  ruleName?: string;
  /**
   * @example
   * 5
   */
  ruleType?: number;
  /**
   * @example
   * db_test
   */
  schema?: string;
  /**
   * @example
   * 00163E06****
   */
  serverMac?: string;
  /**
   * @example
   * 3011610850021000000
   */
  sessionId?: string;
  /**
   * @example
   * 2019-06-06 00:00:00
   */
  sessionLoginTime?: string;
  /**
   * @example
   * 2019-06-06 00:00:00
   */
  sessionLogoutTime?: string;
  /**
   * @example
   * select * from ****
   */
  sqlContent?: string;
  /**
   * @example
   * 1907181552270011186
   */
  sqlId?: string;
  /**
   * @example
   * 8
   */
  sqlType?: string;
  /**
   * @example
   * 1000****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      appClientIp: 'AppClientIp',
      appUsername: 'AppUsername',
      captureTime: 'CaptureTime',
      clientIp: 'ClientIp',
      clientIpAlias: 'ClientIpAlias',
      clientMac: 'ClientMac',
      clientOsUser: 'ClientOsUser',
      clientPort: 'ClientPort',
      clientProgram: 'ClientProgram',
      dbId: 'DbId',
      dbServer: 'DbServer',
      dbUser: 'DbUser',
      execCostUS: 'ExecCostUS',
      fetchCostUS: 'FetchCostUS',
      instName: 'InstName',
      responseCode: 'ResponseCode',
      responseText: 'ResponseText',
      riskLevel: 'RiskLevel',
      ruleId: 'RuleId',
      ruleKeyId: 'RuleKeyId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      schema: 'Schema',
      serverMac: 'ServerMac',
      sessionId: 'SessionId',
      sessionLoginTime: 'SessionLoginTime',
      sessionLogoutTime: 'SessionLogoutTime',
      sqlContent: 'SqlContent',
      sqlId: 'SqlId',
      sqlType: 'SqlType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      appClientIp: 'string',
      appUsername: 'string',
      captureTime: 'string',
      clientIp: 'string',
      clientIpAlias: 'string',
      clientMac: 'string',
      clientOsUser: 'string',
      clientPort: 'number',
      clientProgram: 'string',
      dbId: 'number',
      dbServer: 'string',
      dbUser: 'string',
      execCostUS: 'number',
      fetchCostUS: 'number',
      instName: 'string',
      responseCode: 'string',
      responseText: 'string',
      riskLevel: 'number',
      ruleId: 'number',
      ruleKeyId: 'number',
      ruleName: 'string',
      ruleType: 'number',
      schema: 'string',
      serverMac: 'string',
      sessionId: 'string',
      sessionLoginTime: 'string',
      sessionLogoutTime: 'string',
      sqlContent: 'string',
      sqlId: 'string',
      sqlType: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogListResponseBody extends $dara.Model {
  /**
   * @example
   * 2019-06-06 00:00:00
   */
  beginDate?: string;
  /**
   * @example
   * 2019-06-06 23:59:59
   */
  endDate?: string;
  /**
   * @example
   * true
   */
  incomplete?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1B217656-2267-4FBF-B26C-CDD201BDC3B8
   */
  requestId?: string;
  results?: GetLogListResponseBodyResults[];
  /**
   * @example
   * 10000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      incomplete: 'Incomplete',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      results: 'Results',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      incomplete: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': GetLogListResponseBodyResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

