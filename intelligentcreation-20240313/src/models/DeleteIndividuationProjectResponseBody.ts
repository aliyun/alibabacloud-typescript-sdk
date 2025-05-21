// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIndividuationProjectResponseBody extends $dara.Model {
  desc?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

