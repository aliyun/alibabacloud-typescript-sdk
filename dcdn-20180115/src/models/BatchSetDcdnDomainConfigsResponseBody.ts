// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetDcdnDomainConfigsResponseBodyDomainConfigListDomainConfigModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 123456
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

export class BatchSetDcdnDomainConfigsResponseBodyDomainConfigList extends $dara.Model {
  domainConfigModel?: BatchSetDcdnDomainConfigsResponseBodyDomainConfigListDomainConfigModel[];
  static names(): { [key: string]: string } {
    return {
      domainConfigModel: 'DomainConfigModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigModel: { 'type': 'array', 'itemType': BatchSetDcdnDomainConfigsResponseBodyDomainConfigListDomainConfigModel },
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

export class BatchSetDcdnDomainConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain configurations.
   */
  domainConfigList?: BatchSetDcdnDomainConfigsResponseBodyDomainConfigList;
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
      domainConfigList: BatchSetDcdnDomainConfigsResponseBodyDomainConfigList,
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

