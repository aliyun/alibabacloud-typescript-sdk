// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskInfoResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The action of the event.
   * 
   * @example
   * start
   */
  action?: string;
  /**
   * @remarks
   * The severity level of the event.
   * 
   * @example
   * Normal
   */
  level?: string;
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * start to xxx
   */
  message?: string;
  /**
   * @remarks
   * The cause of the event.
   * 
   * @example
   * NodePoolUpgradeStart
   */
  reason?: string;
  /**
   * @remarks
   * The source of the event.
   * 
   * @example
   * ACK
   */
  source?: string;
  /**
   * @remarks
   * The timestamp when the event was generated.
   * 
   * @example
   * 1669706229286
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      level: 'level',
      message: 'message',
      reason: 'reason',
      source: 'source',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      level: 'string',
      message: 'string',
      reason: 'string',
      source: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

