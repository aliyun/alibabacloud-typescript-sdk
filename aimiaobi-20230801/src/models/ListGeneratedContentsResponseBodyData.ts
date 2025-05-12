// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGeneratedContentsResponseBodyDataFileAttr } from "./ListGeneratedContentsResponseBodyDataFileAttr";


export class ListGeneratedContentsResponseBodyData extends $dara.Model {
  content?: string;
  /**
   * @example
   * media
   */
  contentDomain?: string;
  contentText?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @example
   * 123
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  deviceId?: string;
  fileAttr?: ListGeneratedContentsResponseBodyDataFileAttr;
  fileKey?: string;
  /**
   * @example
   * 10
   */
  id?: number;
  keywordList?: string[];
  keywords?: string;
  prompt?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  title?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  updateTime?: string;
  /**
   * @example
   * 1111
   */
  updateUser?: string;
  /**
   * @example
   * xxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      deviceId: 'DeviceId',
      fileAttr: 'FileAttr',
      fileKey: 'FileKey',
      id: 'Id',
      keywordList: 'KeywordList',
      keywords: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      createTime: 'string',
      createUser: 'string',
      deviceId: 'string',
      fileAttr: ListGeneratedContentsResponseBodyDataFileAttr,
      fileKey: 'string',
      id: 'number',
      keywordList: { 'type': 'array', 'itemType': 'string' },
      keywords: 'string',
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.fileAttr && typeof (this.fileAttr as any).validate === 'function') {
      (this.fileAttr as any).validate();
    }
    if(Array.isArray(this.keywordList)) {
      $dara.Model.validateArray(this.keywordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

