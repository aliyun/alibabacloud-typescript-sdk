// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FunctionLockInfo extends $dara.Model {
  /**
   * @remarks
   * 锁定时间
   * 
   * @example
   * 2025-04-05T10:00:00Z
   */
  lockedAt?: string;
  /**
   * @remarks
   * 锁定方名称
   * 
   * @example
   * AgentRun
   */
  lockedBy?: string;
  /**
   * @remarks
   * 锁定的资源类型列表
   * 
   * @example
   * ["function", "trigger", "version", "alias"]
   */
  lockedResources?: string[];
  static names(): { [key: string]: string } {
    return {
      lockedAt: 'lockedAt',
      lockedBy: 'lockedBy',
      lockedResources: 'lockedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockedAt: 'string',
      lockedBy: 'string',
      lockedResources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.lockedResources)) {
      $dara.Model.validateArray(this.lockedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

