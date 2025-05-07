// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomTopicViewPointByIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dfd73894e6a94fd79fe7ffbe865796fb
   */
  customViewPointId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customViewPointId: 'CustomViewPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customViewPointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

