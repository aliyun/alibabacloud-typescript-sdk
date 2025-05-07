// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCollationTimeZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The character set collation of the instance.
   * 
   * @example
   * Latin1_General_CI_AS
   */
  collation?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8EA054AF-DFA7-497D-9F57-790FFC974C0B
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 114413215
   */
  taskId?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * China Standard Time
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      collation: 'Collation',
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collation: 'string',
      DBInstanceId: 'string',
      requestId: 'string',
      taskId: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

