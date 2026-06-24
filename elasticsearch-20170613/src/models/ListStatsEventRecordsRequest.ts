// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStatsEventRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Event type
   * 
   * @example
   * UserOperator
   */
  eventType?: string;
  /**
   * @remarks
   * Event level
   * 
   * @example
   * Info
   */
  level?: string;
  /**
   * @remarks
   * Status of the management event
   * 
   * @example
   * Executed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'eventType',
      level: 'level',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      level: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

