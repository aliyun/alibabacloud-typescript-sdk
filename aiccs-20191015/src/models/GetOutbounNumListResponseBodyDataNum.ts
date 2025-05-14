// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOutbounNumListResponseBodyDataNum extends $dara.Model {
  description?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 07512234****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      type: 'number',
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

