// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNamespaceResponseBodyData extends $dara.Model {
  createdTime?: string;
  description?: string;
  name?: string;
  namespaceId?: string;
  promptCount?: number;
  scanPolicy?: string;
  skillCount?: number;
  source?: string;
  sourceIndex?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      promptCount: 'PromptCount',
      scanPolicy: 'ScanPolicy',
      skillCount: 'SkillCount',
      source: 'Source',
      sourceIndex: 'SourceIndex',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      name: 'string',
      namespaceId: 'string',
      promptCount: 'number',
      scanPolicy: 'string',
      skillCount: 'number',
      source: 'string',
      sourceIndex: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceResponseBody extends $dara.Model {
  data?: GetNamespaceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetNamespaceResponseBodyData,
      requestId: 'string',
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

