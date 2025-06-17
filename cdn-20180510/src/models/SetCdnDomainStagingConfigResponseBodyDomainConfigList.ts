// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCdnDomainStagingConfigResponseBodyDomainConfigList extends $dara.Model {
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

