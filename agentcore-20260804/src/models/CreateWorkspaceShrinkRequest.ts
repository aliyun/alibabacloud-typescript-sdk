// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for creating a workspace.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The client idempotency token.
   * 
   * @example
   * workspace-create-20260805-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
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

