// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushApplicationDataResponseBodyPushResultsPushResult extends $dara.Model {
  name?: string;
  resultCode?: number;
  resultDescrip?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resultCode: 'ResultCode',
      resultDescrip: 'ResultDescrip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resultCode: 'number',
      resultDescrip: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class PushApplicationDataResponseBody extends $dara.Model {
  pushResults?: PushApplicationDataResponseBodyPushResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushResults: 'PushResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResults: PushApplicationDataResponseBodyPushResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pushResults && typeof (this.pushResults as any).validate === 'function') {
      (this.pushResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

