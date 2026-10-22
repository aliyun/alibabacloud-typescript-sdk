// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePerspectiveRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. Obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The perspective name. The name can be up to 50 characters in length.
   * 
   * @example
   * Client perspective
   */
  name?: string;
  /**
   * @remarks
   * The perspective ID.
   * 
   * @example
   * 3001
   */
  perspectiveId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      name: 'Name',
      perspectiveId: 'PerspectiveId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      name: 'string',
      perspectiveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

