// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecursionRecordRequest extends $dara.Model {
  /**
   * @example
   * 1917628665627259904
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

