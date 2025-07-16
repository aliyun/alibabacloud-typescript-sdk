// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetCdnDomainConfigResponseBodyDomainConfigListDomainConfigModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 1234567
   */
  configId?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * set_resp_header
   */
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

