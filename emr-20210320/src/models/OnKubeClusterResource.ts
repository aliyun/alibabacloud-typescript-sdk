// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnKubeClusterResource extends $dara.Model {
  cpu?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
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

