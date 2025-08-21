// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashLogResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The IP address of the node that generates the log.
   */
  content?: string;
  /**
   * @example
   * 192.168.xx.xx
   */
  host?: string;
  /**
   * @example
   * ls-cn-v0h1kzca****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * info
   */
  level?: string;
  /**
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
   * The details of the log.
   * 
   * @example
   * 7F40EAA1-6F1D-4DD9-8DB8-C5F00C4E****
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp of log generation. Unit: ms.
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

