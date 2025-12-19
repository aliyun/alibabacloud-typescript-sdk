// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppOperateAction } from "./AppOperateAction";


export class AppOperationAddress extends $dara.Model {
  actions?: AppOperateAction[];
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': AppOperateAction },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

