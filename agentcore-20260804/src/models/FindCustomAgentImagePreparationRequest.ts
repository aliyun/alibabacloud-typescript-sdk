// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindCustomAgentImagePreparationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token submitted when creating or explicitly updating the image. Do not specify AgentId or the operation type.
   * 
   * This parameter is required.
   * 
   * @example
   * image-update-20261022-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

