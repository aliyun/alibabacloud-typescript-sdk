// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVccResponseBodyContentCisRouterInfoCcInfos } from "./GetVccResponseBodyContentCisRouterInfoCcInfos";


export class GetVccResponseBodyContentCisRouterInfo extends $dara.Model {
  /**
   * @remarks
   * Leased Line Information List
   */
  ccInfos?: GetVccResponseBodyContentCisRouterInfoCcInfos[];
  /**
   * @remarks
   * The ID of the on-cloud router instance.
   * 
   * @example
   * ccr-1ms84am0
   */
  ccrId?: string;
  static names(): { [key: string]: string } {
    return {
      ccInfos: 'CcInfos',
      ccrId: 'CcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccInfos: { 'type': 'array', 'itemType': GetVccResponseBodyContentCisRouterInfoCcInfos },
      ccrId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ccInfos)) {
      $dara.Model.validateArray(this.ccInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

