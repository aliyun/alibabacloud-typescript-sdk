// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of LogGroups to return. The value must be an integer from 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  count?: number;
  /**
   * @remarks
   * The cursor that specifies the start position from which to read data.
   * 
   * This parameter is required.
   * 
   * @example
   * MTQ0NzMyOTQwMTEwMjEzMDkwNA
   */
  cursor?: string;
  /**
   * @remarks
   * The cursor that specifies the end position at which to stop reading data.
   * 
   * @example
   * MTU1NzA1NzQwMTEwMjEzMDkwCg
   */
  endCursor?: string;
  /**
   * @remarks
   * The filter statement in the Structured Process Language (SPL) syntax. For more information, see [SPL instructions](https://help.aliyun.com/document_detail/2536530.html).
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

