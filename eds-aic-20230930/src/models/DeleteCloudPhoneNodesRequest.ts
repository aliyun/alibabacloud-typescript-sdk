// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudPhoneNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud phone matrix IDs.
   */
  nodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nodeIds: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

