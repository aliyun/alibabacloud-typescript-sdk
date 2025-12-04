// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVmsRealNumberCallConnectionRateInfoRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * 真实号码
   * 
   * @example
   * 131***1234
   */
  realNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 时间段
   * 
   * @example
   * 1764666240123-1764686240567
   */
  timePeriod?: string;
  /**
   * @remarks
   * 虚拟号码
   * 
   * @example
   * 0571***1234
   */
  virtualNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      realNumber: 'RealNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timePeriod: 'TimePeriod',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      realNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      timePeriod: 'string',
      virtualNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

