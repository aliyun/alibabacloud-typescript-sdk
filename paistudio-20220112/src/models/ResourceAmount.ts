// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceAmount extends $dara.Model {
  /**
   * @example
   * 100
   */
  CPU?: string;
  /**
   * @example
   * 16
   */
  GPU?: string;
  /**
   * @example
   * GPU
   */
  GPUType?: string;
  /**
   * @example
   * 100Gi
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
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

