// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomDomain } from "./CustomDomain";


export class ListCustomDomainOutput extends $dara.Model {
  customDomains?: CustomDomain[];
  /**
   * @example
   * next_domain_name
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      customDomains: 'customDomains',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomains: { 'type': 'array', 'itemType': CustomDomain },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

