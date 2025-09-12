// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeDataResponseBodyData extends $dara.Model {
  appId?: string;
  internalKnowledgeId?: string;
  knowledgeName?: string;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      internalKnowledgeId: 'internalKnowledgeId',
      knowledgeName: 'knowledgeName',
      message: 'message',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      internalKnowledgeId: 'string',
      knowledgeName: 'string',
      message: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeDataResponseBody extends $dara.Model {
  code?: string;
  data?: GetKnowledgeDataResponseBodyData[];
  msg?: string;
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
      data: { 'type': 'array', 'itemType': GetKnowledgeDataResponseBodyData },
      msg: 'string',
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

