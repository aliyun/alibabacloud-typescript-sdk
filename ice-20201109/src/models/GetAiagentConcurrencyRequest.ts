// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIAgentConcurrencyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *******3b3d94abda22******
   */
  AIAgentId?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

