// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceLimit extends $dara.Model {
  /**
   * @remarks
   * The number of GPU cores.
   * 
   * @example
   * 2
   */
  CPU?: string;
  /**
   * @remarks
   * The number of GPU cores.
   * 
   * @example
   * 20
   */
  GPU?: string;
  /**
   * @remarks
   * The memory capacity limit, in Gi.
   * 
   * @example
   * 10Gi
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

