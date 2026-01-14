// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the acceleration regions that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * ips-bp11c9mpphtb1xkds****
   */
  ipSetIds?: string[];
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipSetIds: 'IpSetIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSetIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipSetIds)) {
      $dara.Model.validateArray(this.ipSetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

