// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentInstanceConfigGrayConfigs extends $dara.Model {
  condition?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

