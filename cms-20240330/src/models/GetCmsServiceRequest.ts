// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCmsServiceRequest extends $dara.Model {
  /**
   * @remarks
   * prometheus: Checks the activation status of the Prometheus service. The service is billed by reported data volume or written data volume.
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
   * prometheus: Checks whether the Prometheus product that is billed by reported data volume is activated.prometheusgb: Checks whether the Prometheus product that is billed by written data volume is activated.
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

