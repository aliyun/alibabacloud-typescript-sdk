// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAliDingMeetingRequest extends $dara.Model {
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
   * 会议笔记内容（可选），会参与辅助分析
   * 
   * @example
   * string_value
   */
  notes?: string;
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
   * 原始的闪记链接（必填）
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  shanjiUrl?: string;
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
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      shanjiUrl: 'shanjiUrl',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      name: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      shanjiUrl: 'string',
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

