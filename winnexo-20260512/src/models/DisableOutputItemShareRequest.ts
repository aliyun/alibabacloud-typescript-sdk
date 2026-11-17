// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableOutputItemShareRequest extends $dara.Model {
  /**
   * @remarks
   * The output item ID.
   * 
   * @example
   * exampleOutputItemId
   */
  outputItemId?: string;
  /**
   * @remarks
   * The name of the output item. This parameter must be used together with sessionId.
   * 
   * @example
   * Quarterly Review.pptx
   */
  outputItemName?: string;
  /**
   * @remarks
   * The session ID used for exact filtering. The value must be 1 to 128 characters in length. It applies to common sessions, skill sessions, and the execution ID of task executions.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      outputItemId: 'outputItemId',
      outputItemName: 'outputItemName',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputItemId: 'string',
      outputItemName: 'string',
      sessionId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

