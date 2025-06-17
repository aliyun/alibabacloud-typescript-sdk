// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetCdnDomainStagingConfigResponseBodyDomainConfigList } from "./SetCdnDomainStagingConfigResponseBodyDomainConfigList";


export class SetCdnDomainStagingConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain configurations.
   */
  domainConfigList?: SetCdnDomainStagingConfigResponseBodyDomainConfigList[];
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
      domainConfigList: { 'type': 'array', 'itemType': SetCdnDomainStagingConfigResponseBodyDomainConfigList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainConfigList)) {
      $dara.Model.validateArray(this.domainConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

