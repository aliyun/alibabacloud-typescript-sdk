// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRunRequest extends $dara.Model {
  /**
   * @remarks
   * 是否附带执行日志（默认 false，仅在排查问题时建议开启）
   * 
   * @example
   * false
   */
  includeLogs?: boolean;
  /**
   * @remarks
   * runSkill 返回的异步任务 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleRunId
   */
  runId?: string;
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
      includeLogs: 'includeLogs',
      runId: 'runId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeLogs: 'boolean',
      runId: 'string',
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

