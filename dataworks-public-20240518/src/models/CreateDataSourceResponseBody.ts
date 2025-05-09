// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 22130
   */
  id?: number;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * B62EC203-B39E-5DC1-B5B8-EB3C61707009
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

