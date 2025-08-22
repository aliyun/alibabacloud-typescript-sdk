// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRoutineSubdomainRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters of the subdomain.
   * 
   * The parameters are in the following format:
   * 
   *     Subdomains: [
   *         "subdomain-test"
   *     ]
   * 
   * This parameter is required.
   * 
   * @example
   * ["subdomain-test"]
   */
  subdomains?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      subdomains: 'Subdomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subdomains: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.subdomains) {
      $dara.Model.validateMap(this.subdomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

