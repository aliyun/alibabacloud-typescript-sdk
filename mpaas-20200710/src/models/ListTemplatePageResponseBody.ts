// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatePageResponseBodyData extends $dara.Model {
  action?: string;
  content?: string;
  descInfo?: string;
  gmtCreate?: string;
  gmtModified?: string;
  iconUrls?: string;
  id?: string;
  imageUrls?: string;
  name?: string;
  pushStyle?: string;
  showStyle?: string;
  title?: string;
  uri?: string;
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
  code?: string;
  currentPage?: number;
  data?: ListTemplatePageResponseBodyData[];
  msg?: string;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
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

