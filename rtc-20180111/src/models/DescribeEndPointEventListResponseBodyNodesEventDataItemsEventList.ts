// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList extends $dara.Model {
  /**
   * @example
   * 开始发布
   */
  eventName?: string;
  /**
   * @example
   * USER
   */
  eventType?: string;
  /**
   * @example
   * 1614936817
   */
  ts?: number;
  /**
   * @example
   * 1614936817123
   */
  tsInMs?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      ts: 'Ts',
      tsInMs: 'TsInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
      tsInMs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

