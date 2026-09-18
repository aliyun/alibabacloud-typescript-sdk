// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataScheduledTaskInfoBySessionIdValue extends $dara.Model {
  /**
   * @remarks
   * The time when the overview was generated, in UTC ISO 8601 format.
   * 
   * @example
   * 2026-09-17T12:00:00Z
   */
  asOf?: string;
  /**
   * @remarks
   * The number of associated tasks in the ENABLED status.
   * 
   * @example
   * 1
   */
  enabledCount?: number;
  /**
   * @remarks
   * Indicates whether the current session has associated scheduled tasks that are in the ENABLED, PAUSED, or NEEDS_AUTH status.
   * 
   * @example
   * true
   */
  hasScheduledTask?: boolean;
  /**
   * @remarks
   * The total number of associated tasks. Only tasks in the ENABLED, PAUSED, or NEEDS_AUTH status are counted.
   * 
   * @example
   * 1
   */
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      asOf: 'AsOf',
      enabledCount: 'EnabledCount',
      hasScheduledTask: 'HasScheduledTask',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asOf: 'string',
      enabledCount: 'number',
      hasScheduledTask: 'boolean',
      taskCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

