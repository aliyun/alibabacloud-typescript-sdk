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

