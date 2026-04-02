// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DirectNotifyChannel extends $dara.Model {
  /**
   * @remarks
   * 通知对象标识列表
   * 
   * This parameter is required.
   */
  identifiers?: string[];
  /**
   * @remarks
   * 通知渠道类型
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      identifiers: 'identifiers',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifiers: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.identifiers)) {
      $dara.Model.validateArray(this.identifiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

