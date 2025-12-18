// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceOverviewRequest extends $dara.Model {
  /**
   * @example
   * AI
   */
  gatewayType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayType: 'gatewayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

