// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalFeishuMinuteRequest extends $dara.Model {
  /**
   * @remarks
   * 凭证 ID（关联 rbj_credential 表，必填）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleCredentialId
   */
  credentialId?: string;
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
   * 飞书妙记 token（妙记唯一标识符，必填）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  minuteToken?: string;
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
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'credentialId',
      description: 'description',
      directoryId: 'directoryId',
      minuteToken: 'minuteToken',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      description: 'string',
      directoryId: 'string',
      minuteToken: 'string',
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

