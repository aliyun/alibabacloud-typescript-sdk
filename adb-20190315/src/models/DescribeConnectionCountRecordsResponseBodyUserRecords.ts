// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConnectionCountRecordsResponseBodyUserRecords extends $dara.Model {
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The username of the database account.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

