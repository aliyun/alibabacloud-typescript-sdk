// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResidentResourcePool } from "./ResidentResourcePool";


export class ListResidentResourcePoolsOutput extends $dara.Model {
  nextToken?: string;
  residentResourcePools?: ResidentResourcePool[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      residentResourcePools: 'residentResourcePools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      residentResourcePools: { 'type': 'array', 'itemType': ResidentResourcePool },
    };
  }

  validate() {
    if(Array.isArray(this.residentResourcePools)) {
      $dara.Model.validateArray(this.residentResourcePools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

