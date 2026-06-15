// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTuneProposalByIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"example":"xxxx"}
   */
  jsonContent?: string;
  static names(): { [key: string]: string } {
    return {
      jsonContent: 'JsonContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTuneProposalByIdResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetTuneProposalByIdResponseBodyData;
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTuneProposalByIdResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

