// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the DataWorks workspaces. The IDs of the workspaces on which the desired Alibaba Cloud account has permissions were returned.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b57ff7216278945532771749d****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

