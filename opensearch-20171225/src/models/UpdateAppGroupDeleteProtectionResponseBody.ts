// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppGroupDeleteProtectionResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ops-cn-m7r1ywo2h1b
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppGroupDeleteProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 80326EFE-485F-46E7-B291-5A1DD08D2198
   */
  requestId?: string;
  result?: UpdateAppGroupDeleteProtectionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateAppGroupDeleteProtectionResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

