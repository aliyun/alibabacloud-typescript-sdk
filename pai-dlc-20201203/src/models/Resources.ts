// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resources extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 10
   */
  CPU?: string;
  /**
   * @remarks
   * The number of GPU cards.
   * 
   * @example
   * 8
   */
  GPU?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 1024 (unit: GB)
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
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

