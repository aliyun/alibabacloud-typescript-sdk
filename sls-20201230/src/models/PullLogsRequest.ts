// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  count?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MTQ0NzMyOTQwMTEwMjEzMDkwNA
   */
  cursor?: string;
  /**
   * @example
   * MTU1NzA1NzQwMTEwMjEzMDkwCg
   */
  endCursor?: string;
  /**
   * @remarks
   * The SPL statement that is used to filter data. For more information, see [SPL instructions](https://help.aliyun.com/document_detail/2536530.html).
   * 
   * @example
   * * | where userId=\\"123\\"
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      cursor: 'cursor',
      endCursor: 'end_cursor',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      cursor: 'string',
      endCursor: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

