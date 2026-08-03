// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserDeviceListByTmeUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * "KG": KuGou  
   * "KW": Kuwo  
   * "QM": QQ Music
   * 
   * This parameter is required.
   * 
   * @example
   * KG
   */
  sp?: string;
  /**
   * @remarks
   * TME User ID
   * 
   * This parameter is required.
   * 
   * @example
   * FDEEDE337BAA780793D72F7F20BEF2F5
   */
  tmeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      sp: 'Sp',
      tmeUserId: 'TmeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sp: 'string',
      tmeUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

