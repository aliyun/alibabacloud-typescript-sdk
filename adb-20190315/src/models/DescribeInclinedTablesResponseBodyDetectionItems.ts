// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInclinedTablesResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The message of the detection result.
   * 
   * @example
   * There are a total of 10 tables with an excessive number of primary keys.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Excessive primary key fields
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
   * 
   * - NORMAL
   * - WARNING
   * - CRITICAL
   * 
   * @example
   * WARNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

