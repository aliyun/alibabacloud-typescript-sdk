// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVodDomainStagingConfigResponseBodyDomainConfigList extends $dara.Model {
  configId?: number;
  domainName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      domainName: 'string',
      functionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVodDomainStagingConfigResponseBody extends $dara.Model {
  domainConfigList?: SetVodDomainStagingConfigResponseBodyDomainConfigList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigList: 'DomainConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigList: { 'type': 'array', 'itemType': SetVodDomainStagingConfigResponseBodyDomainConfigList },
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

