// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomDomain } from "./CustomDomain";


export class ListCustomDomainOutput extends $dara.Model {
  customDomains?: CustomDomain[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomains: 'customDomains',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomains: { 'type': 'array', 'itemType': CustomDomain },
      nextToken: 'string',
      requestId: 'string',
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

