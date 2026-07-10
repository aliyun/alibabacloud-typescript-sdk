// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The CPU size.
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 4Gi
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      memory: 'memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
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

