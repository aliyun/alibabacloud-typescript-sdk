// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogContentsResponseBodyListLogContentContents extends $dara.Model {
  /**
   * @remarks
   * Log line content.
   * 
   * @example
   * spark pi is 3.14\\n
   */
  lineContent?: string;
  static names(): { [key: string]: string } {
    return {
      lineContent: 'LineContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogContentsResponseBodyListLogContent extends $dara.Model {
  /**
   * @remarks
   * List of log line contents.
   */
  contents?: ListLogContentsResponseBodyListLogContentContents[];
  /**
   * @remarks
   * Total number of log lines.
   * 
   * @example
   * 10
   */
  totalLength?: number;
  static names(): { [key: string]: string } {
    return {
      contents: 'contents',
      totalLength: 'totalLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': ListLogContentsResponseBodyListLogContentContents },
      totalLength: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogContentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Log content.
   */
  listLogContent?: ListLogContentsResponseBodyListLogContent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listLogContent: 'listLogContent',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listLogContent: ListLogContentsResponseBodyListLogContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.listLogContent && typeof (this.listLogContent as any).validate === 'function') {
      (this.listLogContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

