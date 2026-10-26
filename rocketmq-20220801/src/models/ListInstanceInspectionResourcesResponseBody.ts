// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceInspectionResourcesResponseBodyData extends $dara.Model {
  /**
   * @example
   * orders-g1
   */
  id?: string;
  /**
   * @example
   * 订单实例
   */
  name?: string;
  /**
   * @example
   * Risk
   */
  result?: string;
  /**
   * @example
   * 消费延迟超过阈值
   */
  summary?: string;
  /**
   * @example
   * ConsumerGroup
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      result: 'result',
      summary: 'summary',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      result: 'string',
      summary: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceInspectionResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: ListInstanceInspectionResourcesResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  /**
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListInstanceInspectionResourcesResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

