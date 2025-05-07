// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEventTypeResponseBodyEvent extends $dara.Model {
  /**
   * @remarks
   * The code of the security event.
   * 
   * @example
   * Event_LoginCollision
   */
  eventCode?: string;
  /**
   * @remarks
   * The number of events.
   * 
   * @example
   * 0
   */
  eventCount?: number;
  /**
   * @remarks
   * The parent type of the security event.
   * 
   * @example
   * EventType_Account
   */
  eventParentType?: string;
  /**
   * @remarks
   * The type of the security event.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported types of security events.
   * 
   * @example
   * Event_AbnormalFrequency
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      eventCount: 'EventCount',
      eventParentType: 'EventParentType',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventCount: 'number',
      eventParentType: 'string',
      eventType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

