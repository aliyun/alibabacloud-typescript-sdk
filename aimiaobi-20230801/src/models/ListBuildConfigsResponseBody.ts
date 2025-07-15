// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBuildConfigsResponseBodyDataKeywords extends $dara.Model {
  description?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  buildIn?: boolean;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  id?: number;
  keywords?: ListBuildConfigsResponseBodyDataKeywords[];
  /**
   * @example
   * writingStyle
   */
  tag?: string;
  tagDescription?: string;
  /**
   * @example
   * media
   */
  type?: string;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      buildIn: 'BuildIn',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      keywords: 'Keywords',
      tag: 'Tag',
      tagDescription: 'TagDescription',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildIn: 'boolean',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      keywords: { 'type': 'array', 'itemType': ListBuildConfigsResponseBodyDataKeywords },
      tag: 'string',
      tagDescription: 'string',
      type: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListBuildConfigsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListBuildConfigsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

