// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * 目录描述
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 文件名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 父目录内部主键；不传表示创建企业知识库根目录
   * 
   * @example
   * 1
   */
  parentId?: number;
  /**
   * @remarks
   * 文件 OSS URL
   * 
   * @example
   * https://example.com/oss/file.pdf
   */
  path?: string;
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
      parentId: 'parentId',
      path: 'path',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
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

