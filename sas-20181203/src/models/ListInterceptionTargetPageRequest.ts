// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterceptionTargetPageRequest extends $dara.Model {
  /**
   * @remarks
   * The application name of the network object.
   * 
   * @example
   * frontend
   */
  appName?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of images included in the network object.
   */
  imageList?: string[];
  /**
   * @remarks
   * The namespace of the network object.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The maximum number of entries per page for paging. Default value: 20. If you leave this parameter empty, 20 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of tags included in the network object.
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
   * The object type. Valid values:
   * - IMAGE: image.
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

