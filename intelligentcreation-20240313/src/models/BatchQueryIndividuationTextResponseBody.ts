// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryIndividuationTextResponseBodyTextList extends $dara.Model {
  content?: string;
  createTime?: string;
  errorMsg?: string;
  itemId?: string;
  projectId?: string;
  status?: string;
  taskId?: string;
  textId?: string;
  updateTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      errorMsg: 'errorMsg',
      itemId: 'itemId',
      projectId: 'projectId',
      status: 'status',
      taskId: 'taskId',
      textId: 'textId',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      errorMsg: 'string',
      itemId: 'string',
      projectId: 'string',
      status: 'string',
      taskId: 'string',
      textId: 'string',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryIndividuationTextResponseBody extends $dara.Model {
  requestId?: string;
  textList?: BatchQueryIndividuationTextResponseBodyTextList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      textList: 'textList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      textList: { 'type': 'array', 'itemType': BatchQueryIndividuationTextResponseBodyTextList },
    };
  }

  validate() {
    if(Array.isArray(this.textList)) {
      $dara.Model.validateArray(this.textList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

