// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryProcessorNersRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the industry.
   * 
   * *   ECOMMERCE
   * 
   * @example
   * ECOMMERCE
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

