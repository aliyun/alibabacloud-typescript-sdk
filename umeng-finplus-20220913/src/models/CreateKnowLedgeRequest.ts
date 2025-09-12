// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowLedgeRequestBody extends $dara.Model {
  appId?: string;
  internalKnowledgeId?: string;
  knowledgeName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      internalKnowledgeId: 'internalKnowledgeId',
      knowledgeName: 'knowledgeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      internalKnowledgeId: 'string',
      knowledgeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowLedgeRequest extends $dara.Model {
  body?: CreateKnowLedgeRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateKnowLedgeRequestBody,
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

