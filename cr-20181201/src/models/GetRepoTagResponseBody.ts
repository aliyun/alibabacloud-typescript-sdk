// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The size of the image. Unit: Bytes.
   * 
   * @example
   * 67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1****
   */
  digest?: string;
  /**
   * @remarks
   * crr-tquyps22md8p****
   * 
   * @example
   * 1572839125000
   */
  imageCreate?: number;
  /**
   * @example
   * 45023655bf39c382e26a8607d057c27871dee163c1ecf48cc1ebf2a1****
   */
  imageId?: string;
  /**
   * @remarks
   * The number of milliseconds that have elapsed since the image was last updated.
   * 
   * @example
   * 27107966
   */
  imageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1572875608000
   */
  imageUpdate?: number;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * *   `NORMAL`: The image is normal.
   * *   `DELETING`: The image is being deleted.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * 1.0
   * 
   * @example
   * 031572FA-7D8F-4C05-B790-1071E0E05DE6
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The version of the repository.
   * 
   * @example
   * 1.0
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      digest: 'Digest',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      digest: 'string',
      imageCreate: 'number',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
      status: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

