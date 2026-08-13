// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTenantDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * 新目录描述
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 目录唯一标识
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 新父目录内部主键
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
      directoryId: 'directoryId',
      name: 'name',
      parentId: 'parentId',
      path: 'path',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
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

