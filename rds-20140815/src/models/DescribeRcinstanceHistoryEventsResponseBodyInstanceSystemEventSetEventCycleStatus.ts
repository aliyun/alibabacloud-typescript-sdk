// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus extends $dara.Model {
  /**
   * @remarks
   * The state code of the system event.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The state name of the system event.
   * 
   * @example
   * Executed
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

