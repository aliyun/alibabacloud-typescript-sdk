// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentRecoverCallResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 错误手机列表
   */
  unHandleNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      unHandleNumbers: 'UnHandleNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unHandleNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.unHandleNumbers)) {
      $dara.Model.validateArray(this.unHandleNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

