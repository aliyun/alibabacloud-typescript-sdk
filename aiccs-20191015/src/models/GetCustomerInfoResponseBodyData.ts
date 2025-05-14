// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerInfoResponseBodyData extends $dara.Model {
  customizeFields?: { [key: string]: any };
  nick?: string;
  /**
   * @example
   * 6666666
   */
  outerId?: string;
  /**
   * @example
   * https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLSW7XPFlJDwVunXP8pr84TvltwtLlNqTlOVSFeM3bCgn57mAB4JuZZmvMW0qicqW0PyzyUdZpxiaFQ
   */
  photo?: string;
  realName?: string;
  /**
   * @example
   * 823456789023
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      customizeFields: 'CustomizeFields',
      nick: 'Nick',
      outerId: 'OuterId',
      photo: 'Photo',
      realName: 'RealName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizeFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nick: 'string',
      outerId: 'string',
      photo: 'string',
      realName: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.customizeFields) {
      $dara.Model.validateMap(this.customizeFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

