// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBNodesResponseBodyDBNodeIds extends $dara.Model {
  DBNodeId?: string[];
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeId)) {
      $dara.Model.validateArray(this.DBNodeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

