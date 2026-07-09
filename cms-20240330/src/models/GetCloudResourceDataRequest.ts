// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudResourceDataRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the query time range.
   * 
   * The value is a UNIX timestamp in seconds, which represents the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1721767203
   */
  from?: number;
  /**
   * @remarks
   * The query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * .entity with(domain=\\"acs\\", type=\\"acs.k8s.node\\") | limit 0, 10
   */
  query?: string;
  /**
   * @remarks
   * The end of the query time range.
   * 
   * The value is a UNIX timestamp in seconds, which represents the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1721767203
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

