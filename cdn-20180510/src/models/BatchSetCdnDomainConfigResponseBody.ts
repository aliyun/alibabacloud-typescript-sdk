// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchSetCdnDomainConfigResponseBodyDomainConfigList } from "./BatchSetCdnDomainConfigResponseBodyDomainConfigList";


export class BatchSetCdnDomainConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain configurations.
   */
  domainConfigList?: BatchSetCdnDomainConfigResponseBodyDomainConfigList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigList: 'DomainConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigList: BatchSetCdnDomainConfigResponseBodyDomainConfigList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainConfigList && typeof (this.domainConfigList as any).validate === 'function') {
      (this.domainConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

