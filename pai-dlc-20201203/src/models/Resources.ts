// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resources extends $dara.Model {
  /**
   * @example
   * 10
   */
  CPU?: string;
  /**
   * @example
   * 8
   */
  GPU?: string;
  /**
   * @example
   * 1024（单位GB）
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

