// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessibleImagesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  bizSource?: string;
  desktopId?: string;
  desktopType?: string;
  imageType?: string;
  resourceId?: string;
  scene?: string;
  searchKey?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      bizSource: 'BizSource',
      desktopId: 'DesktopId',
      desktopType: 'DesktopType',
      imageType: 'ImageType',
      resourceId: 'ResourceId',
      scene: 'Scene',
      searchKey: 'SearchKey',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      bizSource: 'string',
      desktopId: 'string',
      desktopType: 'string',
      imageType: 'string',
      resourceId: 'string',
      scene: 'string',
      searchKey: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

