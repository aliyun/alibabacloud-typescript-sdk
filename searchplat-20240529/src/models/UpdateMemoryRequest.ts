// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryRequest extends $dara.Model {
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      memory: 'memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

