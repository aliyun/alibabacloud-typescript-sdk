// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatePageResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  action?: string;
  content?: string;
  descInfo?: string;
  /**
   * @example
   * 1727180119
   */
  gmtCreate?: string;
  /**
   * @example
   * 1722564835000
   */
  gmtModified?: string;
  /**
   * @example
   * /
   */
  iconUrls?: string;
  /**
   * @example
   * 10029984
   */
  id?: string;
  /**
   * @example
   * /
   */
  imageUrls?: string;
  name?: string;
  /**
   * @example
   * 0
   */
  pushStyle?: string;
  /**
   * @example
   * 0
   */
  showStyle?: string;
  title?: string;
  /**
   * @example
   * /
   */
  uri?: string;
  /**
   * @example
   * title,content
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      content: 'Content',
      descInfo: 'DescInfo',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      iconUrls: 'IconUrls',
      id: 'Id',
      imageUrls: 'ImageUrls',
      name: 'Name',
      pushStyle: 'PushStyle',
      showStyle: 'ShowStyle',
      title: 'Title',
      uri: 'Uri',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      content: 'string',
      descInfo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      iconUrls: 'string',
      id: 'string',
      imageUrls: 'string',
      name: 'string',
      pushStyle: 'string',
      showStyle: 'string',
      title: 'string',
      uri: 'string',
      variables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatePageResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListTemplatePageResponseBodyData[];
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 6
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      msg: 'Msg',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListTemplatePageResponseBodyData },
      msg: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

