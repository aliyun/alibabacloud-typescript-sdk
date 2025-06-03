// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePushAppResponseBody extends $dara.Model {
  isDebugEnable?: boolean;
  requestId?: string;
  resultObj?: any;
  success?: boolean;
  tipMsg?: string;
  static names(): { [key: string]: string } {
    return {
      isDebugEnable: 'IsDebugEnable',
      requestId: 'RequestId',
      resultObj: 'ResultObj',
      success: 'Success',
      tipMsg: 'TipMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDebugEnable: 'boolean',
      requestId: 'string',
      resultObj: 'any',
      success: 'boolean',
      tipMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

