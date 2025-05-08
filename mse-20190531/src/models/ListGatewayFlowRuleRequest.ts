// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayFlowRuleRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * just for POP
   * 
   * This parameter is required.
   * 
   * @example
   * param
   */
  filterParams?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      filterParams: 'FilterParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      filterParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

