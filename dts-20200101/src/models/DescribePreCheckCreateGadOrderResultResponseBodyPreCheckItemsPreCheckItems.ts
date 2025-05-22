// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItemsPreCheckItems extends $dara.Model {
  /**
   * @example
   * CHECK_MASTER_DB_STATUS
   */
  code?: string;
  /**
   * @example
   * test
   */
  message?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

