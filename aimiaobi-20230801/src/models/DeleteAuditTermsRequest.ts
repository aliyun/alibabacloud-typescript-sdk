// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuditTermsRequest extends $dara.Model {
  idList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      idList: 'IdList',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idList: { 'type': 'array', 'itemType': 'number' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

