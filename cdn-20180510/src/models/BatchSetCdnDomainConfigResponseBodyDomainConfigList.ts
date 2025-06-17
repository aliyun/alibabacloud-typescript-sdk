// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel } from "./BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel";


export class BatchSetCdnDomainConfigResponseBodyDomainConfigList extends $dara.Model {
  domainConfigModel?: BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel[];
  static names(): { [key: string]: string } {
    return {
      domainConfigModel: 'DomainConfigModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigModel: { 'type': 'array', 'itemType': BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel },
    };
  }

  validate() {
    if(Array.isArray(this.domainConfigModel)) {
      $dara.Model.validateArray(this.domainConfigModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

