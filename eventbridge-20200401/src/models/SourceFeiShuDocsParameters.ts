// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceFeiShuDocsParameters extends $dara.Model {
  appId?: string;
  appSecret?: string;
  knowledgeSpaceName?: string;
  loadMode?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      knowledgeSpaceName: 'KnowledgeSpaceName',
      loadMode: 'LoadMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      knowledgeSpaceName: 'string',
      loadMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

