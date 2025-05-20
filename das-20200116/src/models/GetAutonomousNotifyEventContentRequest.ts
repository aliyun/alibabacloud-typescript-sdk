// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutonomousNotifyEventContentRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-18ff4a195d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The unique identifier of the event. You can call the [GetAutonomousNotifyEventsInRange](https://help.aliyun.com/document_detail/288371.html) operation to query the unique identifier returned by the SpanId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 7e7b2774-95b8-4fa3-bd9c-0ab47cb7****
   */
  spanId?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  context?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spanId: 'SpanId',
      context: '__context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spanId: 'string',
      context: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

