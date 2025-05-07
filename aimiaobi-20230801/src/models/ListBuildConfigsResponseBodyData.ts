// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBuildConfigsResponseBodyDataKeywords } from "./ListBuildConfigsResponseBodyDataKeywords";


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

