// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccelerationOfWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * 1***************139
   */
  creatorId?: string;
  /**
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      cubeName: 'CubeName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      cubeName: 'string',
      pageNo: 'number',
      pageSize: 'number',
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

