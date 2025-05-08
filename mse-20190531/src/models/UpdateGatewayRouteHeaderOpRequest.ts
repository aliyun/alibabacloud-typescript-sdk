// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteHeaderOpRequest extends $dara.Model {
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
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 324
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-6bdc977deda44bf589c49d063b4c2d1d
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The description of user header settings.
   * 
   * @example
   * {\\"status\\":\\"on\\",\\"headerOpItems\\":[{\\"directionType\\":\\"Request\\",\\"opType\\":\\"Update\\",\\"key\\":\\"hosts\\",\\"value\\":\\"test.com\\"}]}
   */
  headerOpJSON?: string;
  /**
   * @remarks
   * The ID of the record.
   * 
   * @example
   * 411
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      headerOpJSON: 'HeaderOpJSON',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      headerOpJSON: 'string',
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

