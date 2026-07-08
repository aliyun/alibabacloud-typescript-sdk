// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBuildConfigsResponseBodyDataKeywords extends $dara.Model {
  /**
   * @remarks
   * Description of the preset tag
   * 
   * @example
   * 新闻内容
   */
  description?: string;
  /**
   * @remarks
   * Key of the preset tag
   * 
   * @example
   * 新闻内容
   */
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
   * @remarks
   * Indicates whether the preset is built-in
   * 
   * @example
   * true
   */
  buildIn?: boolean;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2023-04-11 06:14:07
   */
  createTime?: string;
  /**
   * @remarks
   * Creator
   * 
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 主键ID，内置配置（buildIn=true）无该字段
   */
  id?: number;
  /**
   * @remarks
   * List of available values for the tag
   */
  keywords?: ListBuildConfigsResponseBodyDataKeywords[];
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * writingStyle
   */
  tag?: string;
  /**
   * @remarks
   * Tag description
   * 
   * @example
   * 文体
   */
  tagDescription?: string;
  /**
   * @remarks
   * Content category. Valid values: media or government.
   * 
   * @example
   * media
   */
  type?: string;
  /**
   * @remarks
   * Last update time
   * 
   * @example
   * 2023-04-11 06:14:07
   */
  updateTime?: string;
  /**
   * @remarks
   * Last updater
   * 
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
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: ListBuildConfigsResponseBodyData[];
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Unique request ID
   * 
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. true indicates success. false indicates failure.
   * 
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

