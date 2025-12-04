// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLdpsComputeGroupResponseBody extends $dara.Model {
  groupName?: string;
  properties?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      properties: 'Properties',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

