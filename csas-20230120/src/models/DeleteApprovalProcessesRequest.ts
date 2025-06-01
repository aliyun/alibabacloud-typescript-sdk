// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApprovalProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  processIds?: string[];
  static names(): { [key: string]: string } {
    return {
      processIds: 'ProcessIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.processIds)) {
      $dara.Model.validateArray(this.processIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

