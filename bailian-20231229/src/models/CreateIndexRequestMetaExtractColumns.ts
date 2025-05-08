// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexRequestMetaExtractColumns extends $dara.Model {
  desc?: string;
  enableLlm?: boolean;
  enableSearch?: boolean;
  key?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      enableLlm: 'EnableLlm',
      enableSearch: 'EnableSearch',
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enableLlm: 'boolean',
      enableSearch: 'boolean',
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

