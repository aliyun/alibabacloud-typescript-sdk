// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebCustomDomain } from "./WebCustomDomain";


export class ListWebCustomDomainOutput extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * A2RN
   */
  nextToken?: string;
  /**
   * @remarks
   * The custom domain names.
   */
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

