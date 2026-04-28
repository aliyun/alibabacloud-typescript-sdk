// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvisorChecksRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

