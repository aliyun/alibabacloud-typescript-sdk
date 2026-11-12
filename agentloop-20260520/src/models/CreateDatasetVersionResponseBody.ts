// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D17DE39E-6C62-50E3-9EB7-FDE41BB0D43D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

