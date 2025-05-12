// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoTagResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1****
   */
  digest?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 1572839125000
   */
  imageCreate?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * 45023655bf39c382e26a8607d057c27871dee163c1ecf48cc1ebf2a1****
   */
  imageId?: string;
  /**
   * @remarks
   * The size of the image.
   * 
   * @example
   * 27107966
   */
  imageSize?: number;
  /**
   * @remarks
   * The time when the image was last updated.
   * 
   * @example
   * 1572875608000
   */
  imageUpdate?: string;
  /**
   * @remarks
   * The status of the image.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * v0.1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      imageCreate: 'string',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'string',
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

