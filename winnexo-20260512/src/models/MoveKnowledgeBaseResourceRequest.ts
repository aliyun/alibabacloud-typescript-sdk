// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveKnowledgeBaseResourceRequest extends $dara.Model {
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
   * Not supported. This parameter is ignored.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleKnowledgeId
   */
  knowledgeId?: string;
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
   * The source directory ID. This is the enterprise knowledge base directory where the resource currently resides.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceDirectoryId
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2000627
   */
  sourceId?: string;
  /**
   * @remarks
   * The target directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTargetDirectoryId
   */
  targetDirectoryId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1729094555111072
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      knowledgeId: 'knowledgeId',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      targetDirectoryId: 'targetDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      knowledgeId: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      sourceDirectoryId: 'string',
      sourceId: 'string',
      targetDirectoryId: 'string',
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

