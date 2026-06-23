// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOrderRelationInfoToMsenceResponseBodyMpaasSaveOrderRelationResponse extends $dara.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOrderRelationInfoToMsenceResponseBody extends $dara.Model {
  mpaasSaveOrderRelationResponse?: SaveOrderRelationInfoToMsenceResponseBodyMpaasSaveOrderRelationResponse;
  requestId?: string;
  resultCode?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mpaasSaveOrderRelationResponse: 'MpaasSaveOrderRelationResponse',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpaasSaveOrderRelationResponse: SaveOrderRelationInfoToMsenceResponseBodyMpaasSaveOrderRelationResponse,
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.mpaasSaveOrderRelationResponse && typeof (this.mpaasSaveOrderRelationResponse as any).validate === 'function') {
      (this.mpaasSaveOrderRelationResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

