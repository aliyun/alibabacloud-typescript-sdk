// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $dara.Model {
  /**
   * @remarks
   * The parameter name, which is the configuration item of **functionName**. You can configure multiple configuration items.
   * 
   * @example
   * auth_type
   */
  argName?: string;
  /**
   * @remarks
   * The parameter value, which is the value of the configuration item of **functionName**.
   * 
   * @example
   * req_auth
   */
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

