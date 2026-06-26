// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FunctionLockInfo extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the lock was applied.
   * 
   * @example
   * 2025-04-05T10:00:00Z
   */
  lockedAt?: string;
  /**
   * @remarks
   * The name of the entity that applied the lock.
   * 
   * @example
   * AgentRun
   */
  lockedBy?: string;
  /**
   * @remarks
   * The list of locked resource types. Valid values include `function`, `trigger`, `version`, and `alias`.
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

