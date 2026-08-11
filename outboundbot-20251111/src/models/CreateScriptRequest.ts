// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * For testing
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * Test scenario
   */
  name?: string;
  /**
   * @remarks
   * The NLU engine type. Valid values:
   * - BEEBOT: integrates with Chatbot.
   * - PROMPTS: prompt mode.
   * - FUNCTION: integrates with Function Compute.
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      nluEngine: 'NluEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      nluEngine: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

