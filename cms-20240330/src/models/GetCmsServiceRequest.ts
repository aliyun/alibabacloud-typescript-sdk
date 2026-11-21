// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCmsServiceRequest extends $dara.Model {
  /**
   * @remarks
   * prometheus: the activation status of the Prometheus service (billed based on the amount of reported or written data).
   * 
   * @example
   * prometheus
   * 
   * **if can be null:**
   * true
   */
  product?: string;
  /**
   * @remarks
   * prometheus: indicates whether the Prometheus product billed based on the amount of reported data is activated.
   * prometheusgb: indicates whether the Prometheus product billed based on the amount of written data is activated.
   * 
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

