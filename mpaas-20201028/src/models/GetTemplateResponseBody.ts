// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateResponseBodyData extends $dara.Model {
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

export class GetTemplateResponseBody extends $dara.Model {
  code?: string;
  data?: GetTemplateResponseBodyData;
  msg?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTemplateResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

