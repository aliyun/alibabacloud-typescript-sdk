// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWarningConfigResponseBodyDataWarningConfigInfo } from "./ListWarningConfigResponseBodyDataWarningConfigInfo";


export class ListWarningConfigResponseBodyData extends $dara.Model {
  warningConfigInfo?: ListWarningConfigResponseBodyDataWarningConfigInfo[];
  static names(): { [key: string]: string } {
    return {
      warningConfigInfo: 'WarningConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningConfigInfo: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfo },
    };
  }

  validate() {
    if(Array.isArray(this.warningConfigInfo)) {
      $dara.Model.validateArray(this.warningConfigInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

