// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseRenderingDataPackageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dp-9f8c57355d224ad7beaf95e145f22111
   */
  dataPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPackageId: 'DataPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

