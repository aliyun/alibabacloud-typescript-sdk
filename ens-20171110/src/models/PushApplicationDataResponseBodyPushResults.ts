// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushApplicationDataResponseBodyPushResultsPushResult } from "./PushApplicationDataResponseBodyPushResultsPushResult";


export class PushApplicationDataResponseBodyPushResults extends $dara.Model {
  pushResult?: PushApplicationDataResponseBodyPushResultsPushResult[];
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: { 'type': 'array', 'itemType': PushApplicationDataResponseBodyPushResultsPushResult },
    };
  }

  validate() {
    if(Array.isArray(this.pushResult)) {
      $dara.Model.validateArray(this.pushResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

