// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCollaborationGroupOutputItemPreviewRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration space ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The output detail ID. This ID is obtained from the ref.id of a USER_OUTPUT_ITEM node or the space output list.
   * 
   * This parameter is required.
   * 
   * @example
   * 51469466
   */
  itemId?: string;
  /**
   * @remarks
   * The tenant ID. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      itemId: 'itemId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      itemId: 'string',
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

