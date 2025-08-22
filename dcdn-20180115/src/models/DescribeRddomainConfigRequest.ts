// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRDDomainConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the feature. Default value: source_group.
   * 
   * @example
   * source_group
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

