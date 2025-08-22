// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRoutineSubdomainShrinkRequest extends $dara.Model {
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
  subdomainsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      subdomainsShrink: 'Subdomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subdomainsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

