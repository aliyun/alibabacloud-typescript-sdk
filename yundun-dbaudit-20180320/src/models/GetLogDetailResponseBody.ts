// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogDetailResponseBody extends $dara.Model {
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
   * 10
   */
  execCostUS?: number;
  /**
   * @example
   * 10
   */
  fetchCostUS?: number;
  /**
   * @example
   * orcl
   */
  instName?: string;
  /**
   * @example
   * 1B217656-2267-4FBF-B26C-CDD201BDC3B8
   */
  requestId?: string;
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
   * 3
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
  secondarySqlType?: string;
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
   * select * from xxx where name=\\"zhangsan\\"
   */
  sqlContent?: string;
  /**
   * @example
   * 1907181552270011186
   */
  sqlId?: string;
  /**
   * @example
   * [["id","name","age"],["1","zhangsan","20"]]
   */
  sqlResult?: string;
  /**
   * @example
   * 8
   */
  sqlType?: string;
  /**
   * @example
   * SELECT
   */
  sqlTypeName?: string;
  /**
   * @example
   * SELECT * FROM XXX WHERE NAME=\\"#\\"
   */
  templateContent?: string;
  /**
   * @example
   * 1000****
   */
  templateId?: string;
  templateRules?: string[];
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      appClientIp: 'AppClientIp',
      appUsername: 'AppUsername',
      captureTime: 'CaptureTime',
      clientIp: 'ClientIp',
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
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseText: 'ResponseText',
      riskLevel: 'RiskLevel',
      ruleId: 'RuleId',
      ruleKeyId: 'RuleKeyId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      schema: 'Schema',
      secondarySqlType: 'SecondarySqlType',
      serverMac: 'ServerMac',
      sessionId: 'SessionId',
      sessionLoginTime: 'SessionLoginTime',
      sessionLogoutTime: 'SessionLogoutTime',
      sqlContent: 'SqlContent',
      sqlId: 'SqlId',
      sqlResult: 'SqlResult',
      sqlType: 'SqlType',
      sqlTypeName: 'SqlTypeName',
      templateContent: 'TemplateContent',
      templateId: 'TemplateId',
      templateRules: 'TemplateRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      appClientIp: 'string',
      appUsername: 'string',
      captureTime: 'string',
      clientIp: 'string',
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
      requestId: 'string',
      responseCode: 'string',
      responseText: 'string',
      riskLevel: 'number',
      ruleId: 'number',
      ruleKeyId: 'number',
      ruleName: 'string',
      ruleType: 'number',
      schema: 'string',
      secondarySqlType: 'string',
      serverMac: 'string',
      sessionId: 'string',
      sessionLoginTime: 'string',
      sessionLogoutTime: 'string',
      sqlContent: 'string',
      sqlId: 'string',
      sqlResult: 'string',
      sqlType: 'string',
      sqlTypeName: 'string',
      templateContent: 'string',
      templateId: 'string',
      templateRules: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.templateRules)) {
      $dara.Model.validateArray(this.templateRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

