// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType } from "./DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType";


export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet extends $dara.Model {
  physicalConnectionType?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType[];
  static names(): { [key: string]: string } {
    return {
      physicalConnectionType: 'PhysicalConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionType: { 'type': 'array', 'itemType': DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType },
    };
  }

  validate() {
    if(Array.isArray(this.physicalConnectionType)) {
      $dara.Model.validateArray(this.physicalConnectionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

