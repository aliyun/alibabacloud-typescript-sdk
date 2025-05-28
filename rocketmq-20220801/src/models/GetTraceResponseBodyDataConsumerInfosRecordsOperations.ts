// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceResponseBodyDataConsumerInfosRecordsOperations extends $dara.Model {
  /**
   * @remarks
   * Whether it is a dead letter message.
   * 
   * @example
   * true
   */
  deadMessage?: boolean;
  /**
   * @remarks
   * Invisible time, milliseconds.
   * 
   * @example
   * 100
   */
  invisibleTime?: number;
  /**
   * @remarks
   * Operation time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  operateTime?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      deadMessage: 'deadMessage',
      invisibleTime: 'invisibleTime',
      operateTime: 'operateTime',
      operateType: 'operateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadMessage: 'boolean',
      invisibleTime: 'number',
      operateTime: 'string',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

