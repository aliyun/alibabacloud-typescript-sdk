// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddScriptHotWordRequest extends $dara.Model {
  description?: string;
  hotWord?: string;
  scriptRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      hotWord: 'hotWord',
      scriptRecordId: 'scriptRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hotWord: 'string',
      scriptRecordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

