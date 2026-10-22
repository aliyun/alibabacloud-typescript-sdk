// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePerspectiveRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If this parameter is not specified, the default business space is accessed. You can obtain the key from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The description of the perspective.
   * 
   * @example
   * A mobile perspective for the shopping app
   */
  description?: string;
  /**
   * @remarks
   * The name of the perspective. The name can be up to 50 characters in length.
   * 
   * @example
   * Mobile perspective
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

