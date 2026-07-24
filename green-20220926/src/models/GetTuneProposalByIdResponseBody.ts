// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTuneProposalByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response data in JSON format.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetTuneProposalByIdResponseBodyData;
  /**
   * @remarks
   * The description of the error code.
   * 
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

