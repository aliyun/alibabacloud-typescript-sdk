// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeDataRequestBody extends $dara.Model {
  appId?: string;
  knowledgeIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      knowledgeIdList: 'knowledgeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      knowledgeIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeIdList)) {
      $dara.Model.validateArray(this.knowledgeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeDataRequest extends $dara.Model {
  body?: GetKnowledgeDataRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetKnowledgeDataRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

