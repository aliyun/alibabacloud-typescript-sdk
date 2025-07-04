// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType extends $dara.Model {
  /**
   * @remarks
   * The code of the system event type.
   * 
   * @example
   * 34
   */
  code?: string;
  /**
   * @remarks
   * The name of the system event type.
   * 
   * @example
   * InstanceExpiration.Stop
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

