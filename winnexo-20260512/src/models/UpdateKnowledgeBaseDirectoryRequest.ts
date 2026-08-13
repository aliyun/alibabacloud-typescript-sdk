// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * 新分类描述；不传表示不更新
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 待修改的分类 ID（必传）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 新分类名称；不传表示不更新
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 新父分类 ID；不传表示不移动，传入时必须是当前租户下已存在的企业知识库目录 ID
   * 
   * @example
   * exampleParentDirectoryId
   */
  parentDirectoryId?: string;
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
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      name: 'string',
      parentDirectoryId: 'string',
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

