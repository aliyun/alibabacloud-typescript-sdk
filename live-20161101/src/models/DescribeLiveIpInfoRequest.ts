// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveIpInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that you want to check. You can specify only one IP address in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.1
   */
  IP?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

