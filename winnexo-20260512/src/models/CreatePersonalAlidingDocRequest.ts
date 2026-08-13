// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAlidingDocRequest extends $dara.Model {
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
   * 目标个人目录 ID；不传时自动绑定到当前数字员工默认根目录，传入时绑定到该目录（必须是当前用户在当前数字员工下的已有个人目录）
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
   * Agent 命名空间标识，可选
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
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
      filePublicUrl: 'filePublicUrl',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      filePublicUrl: 'string',
      name: 'string',
      operatingObjectName: 'string',
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

