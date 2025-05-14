// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportResponseBodyDataListContents extends $dara.Model {
  /**
   * @example
   * env
   */
  key?: string;
  /**
   * @example
   * 0
   */
  sort?: string;
  /**
   * @example
   * 1
   */
  type?: string;
  /**
   * @example
   * ce9ab5d4a80a9401f97c7077e6a9634bd
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      sort: 'Sort',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      sort: 'string',
      type: 'string',
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

