// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The resource IDs.
   */
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

