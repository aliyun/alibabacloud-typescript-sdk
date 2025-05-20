// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOrgAndFactoryResponseBodyDataFactoryList } from "./GetOrgAndFactoryResponseBodyDataFactoryList";


export class GetOrgAndFactoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1319617584664960
   */
  aliyunPk?: string;
  /**
   * @remarks
   * The sites.
   */
  factoryList?: GetOrgAndFactoryResponseBodyDataFactoryList[];
  /**
   * @remarks
   * The enterprise ID.
   * 
   * @example
   * 6265f42XXXX2fec150
   */
  organizationId?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * @example
   * Ledi Industrial Park
   */
  organizationName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
      factoryList: 'factoryList',
      organizationId: 'organizationId',
      organizationName: 'organizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      factoryList: { 'type': 'array', 'itemType': GetOrgAndFactoryResponseBodyDataFactoryList },
      organizationId: 'string',
      organizationName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.factoryList)) {
      $dara.Model.validateArray(this.factoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

