// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * 分类描述（可选）
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 分类名称（企业知识库目录名称）
   * 
   * This parameter is required.
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 父分类 ID；不传时新分类挂在企业知识库根目录下，传入时必须是当前租户下已存在的企业知识库目录 ID
   * 
   * @example
   * exampleParentDirectoryId
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

