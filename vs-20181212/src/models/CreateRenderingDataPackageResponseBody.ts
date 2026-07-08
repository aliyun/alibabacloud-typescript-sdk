// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingDataPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cloud application service data pack ID
   * 
   * @example
   * dp-9f8c57355d224ad7beaf95e145f22111
   */
  dataPackageId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPackageId: 'DataPackageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackageId: 'string',
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

