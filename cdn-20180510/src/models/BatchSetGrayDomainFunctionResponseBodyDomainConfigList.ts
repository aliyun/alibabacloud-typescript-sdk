// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetGrayDomainFunctionResponseBodyDomainConfigList extends $dara.Model {
  /**
   * @example
   * 1234567
   */
  configId?: number;
  /**
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
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

