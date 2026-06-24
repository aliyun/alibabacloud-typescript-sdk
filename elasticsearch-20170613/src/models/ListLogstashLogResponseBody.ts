// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashLogResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The detailed content of the log.
   */
  content?: string;
  /**
   * @remarks
   * The IP address of the node that generated the log.
   * 
   * @example
   * 192.168.xx.xx
   */
  host?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ls-cn-v0h1kzca****
   */
  instanceId?: string;
  /**
   * @remarks
   * The log level. Valid values: trace, debug, info, warn, and error. GC logs do not have a level.
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The timestamp when the log was generated. Unit: milliseconds.
   * 
   * @example
   * 1531985112420
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      host: 'host',
      instanceId: 'instanceId',
      level: 'level',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      host: 'string',
      instanceId: 'string',
      level: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F40EAA1-6F1D-4DD9-8DB8-C5F00C4E****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListLogstashLogResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListLogstashLogResponseBodyResult },
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

