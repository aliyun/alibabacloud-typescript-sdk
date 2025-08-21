// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {\\n\\t\\"persistent\\":{\\n\\t\\t\\"search\\":{\\n\\t\\t\\t\\"max_buckets\\":\\"10000\\"\\n\\t\\t}\\n\\t}\\n}
   */
  content?: string;
  /**
   * @example
   * dynamicSettings
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  result?: DescribeTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

