// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishDcdnStagingConfigToProductionRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * This parameter is required.
   * 
   * @example
   * aliauth
   */
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

