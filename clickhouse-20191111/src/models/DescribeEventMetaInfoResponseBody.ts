// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventMetaInfoResponseBodyItems extends $dara.Model {
  /**
   * @example
   * Running
   */
  code?: string;
  /**
   * @example
   * Task.TaskStatus
   */
  sourceCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      sourceCode: 'SourceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      sourceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventMetaInfoResponseBody extends $dara.Model {
  items?: DescribeEventMetaInfoResponseBodyItems[];
  /**
   * @example
   * 94F92113-FF63-5E57-8401-6FE123AD11DD
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeEventMetaInfoResponseBodyItems },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

