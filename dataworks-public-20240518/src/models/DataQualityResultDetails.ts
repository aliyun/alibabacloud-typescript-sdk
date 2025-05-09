// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityResultDetails extends $dara.Model {
  /**
   * @example
   * 100.0
   */
  checkedValue?: string;
  /**
   * @example
   * 0.0
   */
  referencedValue?: string;
  /**
   * @example
   * Passed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkedValue: 'CheckedValue',
      referencedValue: 'ReferencedValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedValue: 'string',
      referencedValue: 'string',
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

