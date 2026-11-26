// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumSymbolicStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The column number restored by the JS SourceMap.
   * 
   * @example
   * 10
   */
  column?: number;
  /**
   * @remarks
   * The line number restored by the JS SourceMap.
   * 
   * @example
   * 42
   */
  line?: number;
  /**
   * @remarks
   * The list of symbolicated stack lines.
   * 
   * @example
   * ["\\tat com.example.UserService.getUser(UserService.java:25)"]
   */
  lines?: string[];
  /**
   * @remarks
   * The symbol name restored by the JS SourceMap.
   * 
   * @example
   * handleClick
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-1
   */
  requestId?: string;
  /**
   * @remarks
   * The source file path restored by the JS SourceMap.
   * 
   * @example
   * src/app.js
   */
  source?: string;
  /**
   * @remarks
   * The ID of the exception thread.
   * 
   * @example
   * main-thread
   */
  threadId?: string;
  /**
   * @remarks
   * The list of source code context lines.
   * 
   * @example
   * ["line1"]
   */
  traceInfo?: string[];
  /**
   * @remarks
   * The highlighted line number of the error line in traceInfo.
   * 
   * @example
   * 1
   */
  traceMarkLine?: number;
  static names(): { [key: string]: string } {
    return {
      column: 'column',
      line: 'line',
      lines: 'lines',
      name: 'name',
      requestId: 'requestId',
      source: 'source',
      threadId: 'threadId',
      traceInfo: 'traceInfo',
      traceMarkLine: 'traceMarkLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'number',
      line: 'number',
      lines: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      requestId: 'string',
      source: 'string',
      threadId: 'string',
      traceInfo: { 'type': 'array', 'itemType': 'string' },
      traceMarkLine: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lines)) {
      $dara.Model.validateArray(this.lines);
    }
    if(Array.isArray(this.traceInfo)) {
      $dara.Model.validateArray(this.traceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

