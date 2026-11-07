// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: `zh` (Chinese) and `en` (English). Default value: `zh`.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

