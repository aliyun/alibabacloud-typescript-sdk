// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDomainResponseBodyDomainInfo } from "./ModifyDomainResponseBodyDomainInfo";


export class ModifyDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the domain name.
   */
  domainInfo?: ModifyDomainResponseBodyDomainInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: ModifyDomainResponseBodyDomainInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainInfo && typeof (this.domainInfo as any).validate === 'function') {
      (this.domainInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

