// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseApiKeyRequest extends $dara.Model {
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
   * The API key name.
   * 
   * This parameter is required.
   * 
   * @example
   * my-key
   */
  name?: string;
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
      memberId: 'MemberId',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      name: 'string',
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

