// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalVoiceMeetingRequest extends $dara.Model {
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
   * 目标个人目录 ID；不传时自动绑定到当前数字员工默认根目录，传入时必须是当前用户在当前数字员工下的已有个人目录
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 离线会议音频文件 URL（必填）
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  fileUrl?: string;
  /**
   * @remarks
   * 资源显示名称
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
      fileUrl: 'fileUrl',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      fileUrl: 'string',
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

