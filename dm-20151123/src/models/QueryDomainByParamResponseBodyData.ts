// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDomainByParamResponseBodyDataDomain } from "./QueryDomainByParamResponseBodyDataDomain";


export class QueryDomainByParamResponseBodyData extends $dara.Model {
  domain?: QueryDomainByParamResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': QueryDomainByParamResponseBodyDataDomain },
    };
  }

  validate() {
    if(Array.isArray(this.domain)) {
      $dara.Model.validateArray(this.domain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

