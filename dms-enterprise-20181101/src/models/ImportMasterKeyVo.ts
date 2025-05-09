// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportMasterKeyVO extends $dara.Model {
  encryptMekDataBase64?: string;
  mekId?: number;
  projectId?: number[];
  static names(): { [key: string]: string } {
    return {
      encryptMekDataBase64: 'EncryptMekDataBase64',
      mekId: 'MekId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptMekDataBase64: 'string',
      mekId: 'number',
      projectId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.projectId)) {
      $dara.Model.validateArray(this.projectId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

