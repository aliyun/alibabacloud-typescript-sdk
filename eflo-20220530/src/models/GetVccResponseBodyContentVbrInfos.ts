// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVccResponseBodyContentVbrInfosVbrBgpPeers } from "./GetVccResponseBodyContentVbrInfosVbrBgpPeers";


export class GetVccResponseBodyContentVbrInfos extends $dara.Model {
  /**
   * @remarks
   * CEN ID
   * 
   * @example
   * cen-cx0qua8q6cm4z9****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1683250981000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1673578603000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The status of the VBR. Valid values:
   * 
   * *   unconfirmed
   * *   active: The VPN gateway is in a normal state.
   * *   terminating: The connection is being terminated.
   * *   terminated: The connection is terminated.
   * *   recovering: The task is being recovered.
   * *   deleting: The GDN is being deleted.
   * *   Available: The service is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * BGP neighbor information list
   */
  vbrBgpPeers?: GetVccResponseBodyContentVbrInfosVbrBgpPeers[];
  /**
   * @remarks
   * The ID of the border router.
   * 
   * @example
   * vbr-wz96agu9h3d50z****
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      status: 'Status',
      vbrBgpPeers: 'VbrBgpPeers',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      status: 'string',
      vbrBgpPeers: { 'type': 'array', 'itemType': GetVccResponseBodyContentVbrInfosVbrBgpPeers },
      vbrId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vbrBgpPeers)) {
      $dara.Model.validateArray(this.vbrBgpPeers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

