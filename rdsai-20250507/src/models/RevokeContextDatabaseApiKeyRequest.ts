// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeContextDatabaseApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * API Key ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  keyId?: number;
  /**
   * @remarks
   * The member ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mb-cz51tnnp8****
   */
  memberId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      memberId: 'MemberId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'number',
      memberId: 'string',
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

