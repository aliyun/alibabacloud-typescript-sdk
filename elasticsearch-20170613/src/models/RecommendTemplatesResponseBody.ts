// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecommendTemplatesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {\\n\\t\\"persistent\\": {\\n\\t\\t\\"search\\": {\\n\\t\\t\\t\\"max_buckets\\": \\"10000\\"\\n\\t\\t}\\n\\t}\\n}
   */
  content?: string;
  /**
   * @remarks
   * *
   * *
   * *
   * *
   * 
   * **
   * 
   * ****
   * 
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

export class RecommendTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 66B060CF-7381-49C7-9B89-7757927FDA16
   */
  requestId?: string;
  result?: RecommendTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': RecommendTemplatesResponseBodyResult },
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

