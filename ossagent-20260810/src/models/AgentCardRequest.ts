// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentCardRequest extends $dara.Model {
  /**
   * @example
   * a2a
   */
  env?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

