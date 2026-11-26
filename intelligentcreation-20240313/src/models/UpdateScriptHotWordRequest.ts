// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScriptHotWordRequest extends $dara.Model {
  description?: string;
  hotWord?: string;
  hotWordId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      hotWord: 'hotWord',
      hotWordId: 'hotWordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hotWord: 'string',
      hotWordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

