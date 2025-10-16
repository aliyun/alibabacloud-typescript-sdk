// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventNameListResponseBodyEventNameList extends $dara.Model {
  /**
   * @example
   * CActivity
   */
  eventKey?: string;
  eventName?: string;
  static names(): { [key: string]: string } {
    return {
      eventKey: 'EventKey',
      eventName: 'EventName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventKey: 'string',
      eventName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventNameListResponseBody extends $dara.Model {
  eventNameList?: DescribeInvadeEventNameListResponseBodyEventNameList[];
  nameList?: string[];
  /**
   * @example
   * 6ABAA264-E7B5-5D66-8FC3-9253100****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventNameList: 'EventNameList',
      nameList: 'NameList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventNameList: { 'type': 'array', 'itemType': DescribeInvadeEventNameListResponseBodyEventNameList },
      nameList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventNameList)) {
      $dara.Model.validateArray(this.eventNameList);
    }
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

