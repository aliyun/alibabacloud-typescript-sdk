// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseInput extends $dara.Model {
  credentialName?: string;
  description?: string;
  providerSettings?: { [key: string]: any };
  retrieveSettings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      credentialName: 'credentialName',
      description: 'description',
      providerSettings: 'providerSettings',
      retrieveSettings: 'retrieveSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      description: 'string',
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

