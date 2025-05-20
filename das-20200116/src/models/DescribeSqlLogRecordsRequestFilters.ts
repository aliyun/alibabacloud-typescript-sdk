// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogRecordsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter parameter.
   * 
   * >  For more information about the supported filter parameters and their valid values, see the **Supported parameters and values for Key** section of this topic.
   * 
   * @example
   * keyWords
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter parameter.
   * 
   * @example
   * select
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

