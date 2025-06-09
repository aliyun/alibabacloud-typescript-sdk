// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogGroup } from "./LogGroup";


export class LogGroupList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  logGroupList?: LogGroup[];
  static names(): { [key: string]: string } {
    return {
      logGroupList: 'logGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logGroupList: { 'type': 'array', 'itemType': LogGroup },
    };
  }

  validate() {
    if(Array.isArray(this.logGroupList)) {
      $dara.Model.validateArray(this.logGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

