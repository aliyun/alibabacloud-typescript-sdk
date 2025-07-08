// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsSignListNewResponseBodySmsSignSmsSignSignSceneDetailListSignSceneDetail } from "./QuerySmsSignListNewResponseBodySmsSignSmsSignSignSceneDetailListSignSceneDetail";


export class QuerySmsSignListNewResponseBodySmsSignSmsSignSignSceneDetailList extends $dara.Model {
  signSceneDetail?: QuerySmsSignListNewResponseBodySmsSignSmsSignSignSceneDetailListSignSceneDetail[];
  static names(): { [key: string]: string } {
    return {
      signSceneDetail: 'SignSceneDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signSceneDetail: { 'type': 'array', 'itemType': QuerySmsSignListNewResponseBodySmsSignSmsSignSignSceneDetailListSignSceneDetail },
    };
  }

  validate() {
    if(Array.isArray(this.signSceneDetail)) {
      $dara.Model.validateArray(this.signSceneDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

