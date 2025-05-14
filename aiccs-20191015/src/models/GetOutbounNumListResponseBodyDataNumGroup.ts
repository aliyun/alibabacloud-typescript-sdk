// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOutbounNumListResponseBodyDataNumGroup extends $dara.Model {
  /**
   * @example
   * Jella
   */
  description?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  /**
   * @example
   * 7688****
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

