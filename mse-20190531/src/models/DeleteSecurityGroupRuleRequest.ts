// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  cascadingDelete?: boolean;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-83b0ddb569434f82b9fe8e4c60c40f7c
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The destination ID.
   * 
   * @example
   * 93
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      cascadingDelete: 'CascadingDelete',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      cascadingDelete: 'boolean',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

