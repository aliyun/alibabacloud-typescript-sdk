// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventDisposeResponseBodyDataReceiverInfo } from "./DescribeEventDisposeResponseBodyDataReceiverInfo";


export class DescribeEventDisposeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An array consisting of JSON objects that are configured for event handling.
   * 
   * @example
   * { playbookName: "使用安全组封禁入方向IP", sophonTaskId: "400442a5-4f98-45ed-97db-5ab117eb0b8f", … }
   */
  eventDispose?: any[];
  /**
   * @remarks
   * The JSON object that is configured for an alert recipient.
   */
  receiverInfo?: DescribeEventDisposeResponseBodyDataReceiverInfo;
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: not handled
   * *   1: handing
   * *   5: handling failed
   * *   10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      eventDispose: 'EventDispose',
      receiverInfo: 'ReceiverInfo',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDispose: { 'type': 'array', 'itemType': 'any' },
      receiverInfo: DescribeEventDisposeResponseBodyDataReceiverInfo,
      remark: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventDispose)) {
      $dara.Model.validateArray(this.eventDispose);
    }
    if(this.receiverInfo && typeof (this.receiverInfo as any).validate === 'function') {
      (this.receiverInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

