// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * 目录描述（可选）
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 目录名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 数字员工名称（已废弃：不再作为个人资源隔离条件，仅保留用于来源追溯）
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 父目录 ID；不传时新目录挂在用户的默认根目录下，传入时必须是当前用户的已有个人目录
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
      operatingObjectName: 'operatingObjectName',
      parentDirectoryId: 'parentDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      operatingObjectName: 'string',
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

