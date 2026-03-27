// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCmsServiceRequest extends $dara.Model {
  /**
   * @example
   * prometheus
   * 
   * **if can be null:**
   * true
   */
  product?: string;
  /**
   * @example
   * prometheus
   * 
   * **if can be null:**
   * true
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

