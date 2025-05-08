// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAICImagesRequest extends $dara.Model {
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
   * The type of the image. Valid values:
   * 
   * *   **public**: public image
   * *   **private**: custom image
   * 
   * @example
   * public
   */
  imageType?: string;
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
   * The end of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2022-02-02
   */
  maxDate?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2022-01-02
   */
  minDate?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. The maximum value is **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * *   **verifying**
   * *   **disable**
   * *   **available**
   * 
   * @example
   * available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageId: 'ImageId',
      imageType: 'ImageType',
      imageUrl: 'ImageUrl',
      maxDate: 'MaxDate',
      minDate: 'MinDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageId: 'string',
      imageType: 'string',
      imageUrl: 'string',
      maxDate: 'string',
      minDate: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

