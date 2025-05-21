// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIndividuationTextResponseBody extends $dara.Model {
  desc?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4830493A-728F-5F19-BBCC-1443292E9C49
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

