// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListESAIPInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  vipInfo?: string;
  static names(): { [key: string]: string } {
    return {
      vipInfo: 'VipInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vipInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

