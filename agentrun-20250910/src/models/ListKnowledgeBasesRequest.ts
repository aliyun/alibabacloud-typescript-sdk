// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBasesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @example
   * 1e546db8-bd93-5a52-9be1-5a1351cdac95
   */
  workspaceId?: string;
  /**
   * @example
   * 1e546db8-bd93-5a52-9be1-5a1351cdac95,1e546db8-bd93-5a52-9be1-5a1351caass4
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      provider: 'provider',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
      workspaceId: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

