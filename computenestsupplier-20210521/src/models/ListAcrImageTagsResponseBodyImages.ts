// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAcrImageTagsResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The image size. Unit: bytes.
   * 
   * @example
   * 188394616
   */
  imageSize?: string;
  /**
   * @remarks
   * The time when the image was modified.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 5.7.2
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      imageSize: 'ImageSize',
      modifiedTime: 'ModifiedTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      imageSize: 'string',
      modifiedTime: 'string',
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

