// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebCustomDomain } from "./WebCustomDomain";


export class ListWebCustomDomainOutput extends $dara.Model {
  nextToken?: string;
  webCustomDomains?: WebCustomDomain[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      webCustomDomains: 'WebCustomDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      webCustomDomains: { 'type': 'array', 'itemType': WebCustomDomain },
    };
  }

  validate() {
    if(Array.isArray(this.webCustomDomains)) {
      $dara.Model.validateArray(this.webCustomDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

