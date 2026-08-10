// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsRequest extends $dara.Model {
  forward?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  from?: number;
  highlight?: boolean;
  isAccurate?: boolean;
  /**
   * @example
   * 100
   */
  line?: number;
  /**
   * @example
   * 0
   */
  offset?: number;
  powerSql?: boolean;
  /**
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  query?: string;
  reverse?: boolean;
  session?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  to?: number;
  /**
   * @example
   * topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      forward: 'forward',
      from: 'from',
      highlight: 'highlight',
      isAccurate: 'isAccurate',
      line: 'line',
      offset: 'offset',
      powerSql: 'powerSql',
      query: 'query',
      reverse: 'reverse',
      session: 'session',
      to: 'to',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forward: 'boolean',
      from: 'number',
      highlight: 'boolean',
      isAccurate: 'boolean',
      line: 'number',
      offset: 'number',
      powerSql: 'boolean',
      query: 'string',
      reverse: 'boolean',
      session: 'string',
      to: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

