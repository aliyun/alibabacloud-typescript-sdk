// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Tool extends $dara.Model {
  method?: string;
  path?: string;
  toolId?: string;
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      path: 'path',
      toolId: 'toolId',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      path: 'string',
      toolId: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

