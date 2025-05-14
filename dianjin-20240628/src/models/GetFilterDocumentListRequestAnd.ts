// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFilterDocumentListRequestAnd extends $dara.Model {
  /**
   * @example
   * 1
   */
  boost?: number;
  /**
   * @example
   * company
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  /**
   * @example
   * alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
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

