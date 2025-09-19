// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterceptionTargetPageRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the network object belongs.
   * 
   * @example
   * frontend
   */
  appName?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The images of the network object.
   */
  imageList?: string[];
  /**
   * @remarks
   * The namespace to which the network object belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The labels specified for the network object.
   */
  tagList?: string[];
  /**
   * @remarks
   * The name of the network object.
   * 
   * @example
   * source-test-obj-0****
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the network object. Valid values:
   * 
   * *   IMAGE
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      currentPage: 'CurrentPage',
      imageList: 'ImageList',
      namespace: 'Namespace',
      pageSize: 'PageSize',
      tagList: 'TagList',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      currentPage: 'number',
      imageList: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
      pageSize: 'number',
      tagList: { 'type': 'array', 'itemType': 'string' },
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageList)) {
      $dara.Model.validateArray(this.imageList);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

