// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseAliDingDocRequest extends $dara.Model {
  /**
   * @remarks
   * 资源描述（可选）
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 目标企业知识库目录 ID；不传时自动绑定到当前数字员工默认根目录，传入时必须是当前租户下已有的企业知识库目录
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 阿里钉在线文档的可公开访问 URL
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * 知识库 ID（可选，透传给 document_agent）
   * 
   * @example
   * exampleKnowledgeId
   */
  knowledgeId?: string;
  /**
   * @remarks
   * 资源显示名称（建议传入钉钉文档标题）
   * 
   * This parameter is required.
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 数字员工名称（运营对象 name，可选）
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 资源标签（可选，JSON 字符串列表，如 ["tagA","tagB"]）
   * 
   * @example
   * string_value
   */
  sourceTags?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      filePublicUrl: 'filePublicUrl',
      knowledgeId: 'knowledgeId',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      filePublicUrl: 'string',
      knowledgeId: 'string',
      name: 'string',
      operatingObjectName: 'string',
      sourceTags: 'string',
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

