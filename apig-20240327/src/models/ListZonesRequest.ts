// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The target gateway edition for querying zones. Valid values:
   * - Professional: standard gateway. This is the default value.
   * - ServerlessV2: API multi-tenant Serverless V2.
   * 
   * If this parameter is not specified, Professional is used.
   * 
   * @example
   * ServerlessV2
   */
  gatewayEdition?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayEdition: 'gatewayEdition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayEdition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

