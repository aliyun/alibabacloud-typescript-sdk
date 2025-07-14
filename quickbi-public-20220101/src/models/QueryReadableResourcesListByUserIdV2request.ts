// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReadableResourcesListByUserIdV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdas*********sdsddf
   */
  userId?: string;
  /**
   * @example
   * DATAFORM
   */
  workType?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      workType: 'WorkType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      workType: 'string',
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

