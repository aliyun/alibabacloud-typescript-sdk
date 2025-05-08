// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAICImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2022-09-22 10:54:34
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * Test operation of console
   */
  description?: string;
  /**
   * @remarks
   * The image ID of the AIC instance.
   * 
   * @example
   * m-ad0ddaddc2d54adeaa09b7c0f1e****
   */
  imageId?: string;
  /**
   * @remarks
   * The URL of the AIC image repository.
   * 
   * @example
   * ****.alibaba-inc.com/aic/socimage:test
   */
  imageUrl?: string;
  /**
   * @remarks
   * The status of the image. **Available** is returned for this parameter. Available indicates that the image is available.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The username of the image repository.
   * 
   * @example
   * user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      status: 'Status',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      imageId: 'string',
      imageUrl: 'string',
      status: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

