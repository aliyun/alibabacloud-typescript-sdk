// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGrayDomainFunctionResponseBodyDomainConfigListFunctionArgs extends $dara.Model {
  /**
   * @example
   * auth_type
   */
  argName?: string;
  /**
   * @example
   * req
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

