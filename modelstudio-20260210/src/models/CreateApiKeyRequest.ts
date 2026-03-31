// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * ws-8af73c50f5596193
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

