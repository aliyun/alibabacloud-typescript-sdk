// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySemanticKnowledgeRequest extends $dara.Model {
  /**
   * @remarks
   * The digital human name. Call listAuthorizedAgents first to retrieve the list of USE permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * SampleDigitalHuman
   */
  agentName?: string;
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The knowledge graph name. Call listGraphs first to retrieve available graphs.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The natural language query question.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  query?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass it explicitly with --tenant-id.
   * 
   * This parameter is required.
   * 
   * @example
   * 21577
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'agentName',
      appToken: 'appToken',
      graphName: 'graphName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      query: 'query',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      appToken: 'string',
      graphName: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      query: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

