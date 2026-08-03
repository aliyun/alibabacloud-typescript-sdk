// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGenerateAICoachScriptTaskRequestDocList extends $dara.Model {
  docId?: string;
  docName?: string;
  kbId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      docName: 'docName',
      kbId: 'kbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docName: 'string',
      kbId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGenerateAICoachScriptTaskRequest extends $dara.Model {
  assessmentPoint?: boolean;
  description?: string;
  dialogueKey?: string;
  dialogueUrl?: string;
  docList?: CreateGenerateAICoachScriptTaskRequestDocList[];
  docUrlList?: string[];
  scriptName?: string;
  static names(): { [key: string]: string } {
    return {
      assessmentPoint: 'assessmentPoint',
      description: 'description',
      dialogueKey: 'dialogueKey',
      dialogueUrl: 'dialogueUrl',
      docList: 'docList',
      docUrlList: 'docUrlList',
      scriptName: 'scriptName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessmentPoint: 'boolean',
      description: 'string',
      dialogueKey: 'string',
      dialogueUrl: 'string',
      docList: { 'type': 'array', 'itemType': CreateGenerateAICoachScriptTaskRequestDocList },
      docUrlList: { 'type': 'array', 'itemType': 'string' },
      scriptName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docList)) {
      $dara.Model.validateArray(this.docList);
    }
    if(Array.isArray(this.docUrlList)) {
      $dara.Model.validateArray(this.docUrlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

