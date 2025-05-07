// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerResources extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

