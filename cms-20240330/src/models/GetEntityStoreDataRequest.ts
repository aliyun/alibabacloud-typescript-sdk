// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEntityStoreDataRequest extends $dara.Model {
  /**
   * @remarks
   * Start time of the query.
   * 
   * Unix timestamp format, representing the number of seconds since 1970-1-1 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1721767203
   */
  from?: number;
  /**
   * @remarks
   * Query statement
   * 
   * This parameter is required.
   * 
   * @example
   * .entity with(domain=\\"acs\\", type=\\"acs.k8s.node\\") | limit 0, 10
   */
  query?: string;
  /**
   * @remarks
   * End time of the query.
   * 
   * Unix timestamp format, representing the number of seconds since 1970-1-1 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1721767283
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      query: 'query',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      query: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

