// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration that you want to query. Valid values:
   * 
   * *   **domain_business_control**: user configurations
   * *   **waf**: Web Application Firewall (WAF) configurations
   * 
   * This parameter is required.
   * 
   * @example
   * domain_business_control
   */
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

