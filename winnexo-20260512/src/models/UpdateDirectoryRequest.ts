// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * 新目录描述；缺省表示不更新
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 目录唯一标识（业务 ID，非主键 ID）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 新目录名称；缺省表示不更新
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 新父目录主键 ID；缺省表示不更新父目录
   * 
   * @example
   * 1
   */
  parentId?: number;
  /**
   * @remarks
   * 新目录路径；传入时会级联更新当前目录及全部子目录的 path
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

