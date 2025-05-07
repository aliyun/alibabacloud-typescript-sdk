// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindXBResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 工作号关系绑定的唯一标识
   * 
   * @example
   * 4353453456
   */
  authId?: string;
  /**
   * @remarks
   * X号码
   * 
   * @example
   * 18640577897
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'string',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

