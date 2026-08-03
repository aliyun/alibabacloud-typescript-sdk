// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIndividuationTextTaskResponseBodyTextList extends $dara.Model {
  status?: number;
  textId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      textId: 'textId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      textId: 'string',
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

export class QueryIndividuationTextTaskResponseBody extends $dara.Model {
  createTime?: string;
  requestId?: string;
  status?: number;
  textList?: QueryIndividuationTextTaskResponseBodyTextList[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      requestId: 'requestId',
      status: 'status',
      textList: 'textList',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      requestId: 'string',
      status: 'number',
      textList: { 'type': 'array', 'itemType': QueryIndividuationTextTaskResponseBodyTextList },
      updateTime: 'string',
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

