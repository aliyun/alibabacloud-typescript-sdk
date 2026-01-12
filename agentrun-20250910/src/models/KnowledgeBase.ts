// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeBase extends $dara.Model {
  createdAt?: string;
  credentialName?: string;
  description?: string;
  knowledgeBaseId?: string;
  knowledgeBaseName?: string;
  lastUpdatedAt?: string;
  provider?: string;
  providerSettings?: { [key: string]: any };
  retrieveSettings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      credentialName: 'credentialName',
      description: 'description',
      knowledgeBaseId: 'knowledgeBaseId',
      knowledgeBaseName: 'knowledgeBaseName',
      lastUpdatedAt: 'lastUpdatedAt',
      provider: 'provider',
      providerSettings: 'providerSettings',
      retrieveSettings: 'retrieveSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      credentialName: 'string',
      description: 'string',
      knowledgeBaseId: 'string',
      knowledgeBaseName: 'string',
      lastUpdatedAt: 'string',
      provider: 'string',
      providerSettings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      retrieveSettings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.providerSettings) {
      $dara.Model.validateMap(this.providerSettings);
    }
    if(this.retrieveSettings) {
      $dara.Model.validateMap(this.retrieveSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

