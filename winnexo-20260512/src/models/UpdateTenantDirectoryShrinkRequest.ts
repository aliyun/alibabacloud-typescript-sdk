// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTenantDirectoryShrinkRequest extends $dara.Model {
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
   * 后续内容更新的AI版本摘要开关；false关闭，未传/null保持既有语义，不删除既有摘要
   */
  changeRecordEnabled?: boolean;
  /**
   * @remarks
   * The new directory description. If this parameter is omitted or set to null, the original value is retained.
   * 
   * @example
   * Team product materials and operation guides
   */
  description?: string;
  /**
   * @remarks
   * The business ID of the enterprise knowledge base directory for the current tenant, which is not the internal primary key. When digital employee associations or version summary configurations are included, the target must be the root directory of a standard enterprise knowledge base.
   * 
   * @example
   * kb-example
   */
  directoryId?: string;
  /**
   * @remarks
   * The new directory name. It can be up to 256 characters in length. If this parameter is omitted or set to null, the original value is retained.
   * 
   * @example
   * Product knowledge base
   */
  name?: string;
  /**
   * @remarks
   * 数字员工关联模式；仅普通企业知识库根可设置。未传/null保持既有语义；SPECIFIED须显式提供名单，ALL仅允许省略或空名单
   * 
   * @example
   * SPECIFIED
   */
  ooVisibilityMode?: string;
  /**
   * @remarks
   * 数字员工内部名称列表，最多100项，每项非空且最多256字符；SPECIFIED空数组表示不关联任何员工，非空名单按去重后全量替换
   */
  operatingObjectNamesShrink?: string;
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
   * The internal primary key of the new parent folder. If this parameter is omitted or set to null, the original parent folder is retained. If a non-null value is passed, knowledge base management permissions for the target parent folder are required. This parameter cannot be committed at the same time as the digital employee associate or version summary configurations.
   * 
   * @example
   * 1001
   */
  parentId?: number;
  /**
   * @remarks
   * The new directory path. If this parameter is omitted or set to null, a new path is not explicitly specified and is processed by the directory service.
   * 
   * @example
   * /Product knowledge base
   */
  path?: string;
  /**
   * @remarks
   * The ID of the target tenant. It is used for tenant routing in public requests. The server-side authentication chain verifies access permissions. You cannot use this parameter to access unauthorized tenants.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      changeRecordEnabled: 'changeRecordEnabled',
      description: 'description',
      directoryId: 'directoryId',
      name: 'name',
      ooVisibilityMode: 'ooVisibilityMode',
      operatingObjectNamesShrink: 'operatingObjectNames',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      parentId: 'parentId',
      path: 'path',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      changeRecordEnabled: 'boolean',
      description: 'string',
      directoryId: 'string',
      name: 'string',
      ooVisibilityMode: 'string',
      operatingObjectNamesShrink: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      parentId: 'number',
      path: 'string',
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

