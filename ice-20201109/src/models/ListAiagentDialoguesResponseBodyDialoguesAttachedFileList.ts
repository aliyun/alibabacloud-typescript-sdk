// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentDialoguesResponseBodyDialoguesAttachedFileList extends $dara.Model {
  format?: string;
  id?: string;
  name?: string;
  type?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
      name: 'string',
      type: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

