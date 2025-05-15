// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesResponseBodyServicesCommodity extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * Deploy Page.
   * 
   * @example
   * Order： Order Page
   * Detail： Detail Page
   */
  deployPage?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      deployPage: 'DeployPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      deployPage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

