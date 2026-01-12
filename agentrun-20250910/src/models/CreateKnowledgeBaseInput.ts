// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseInput extends $dara.Model {
  credentialName?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  provider?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  providerSettings?: { [key: string]: any };
  retrieveSettings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      credentialName: 'credentialName',
      description: 'description',
      knowledgeBaseName: 'knowledgeBaseName',
      provider: 'provider',
      providerSettings: 'providerSettings',
      retrieveSettings: 'retrieveSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      description: 'string',
      knowledgeBaseName: 'string',
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

