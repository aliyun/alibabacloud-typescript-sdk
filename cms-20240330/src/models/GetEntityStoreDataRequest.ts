// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEntityStoreDataRequest extends $dara.Model {
  /**
   * @remarks
   * The start point in time for the query.
   * 
   * This is a UNIX timestamp. It represents the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 1721767203
   */
  from?: number;
  /**
   * @remarks
   * The search statement.
   * 
   * This parameter is required.
   * 
   * @example
   * .entity with(domain=\\"acs\\", type=\\"acs.k8s.node\\") | limit 0, 10
   */
  query?: string;
  /**
   * @remarks
   * The end point in time for the query.
   * 
   * This is a UNIX timestamp. It represents the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970.
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

