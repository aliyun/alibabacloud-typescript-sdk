// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessPointsResponseBodyAccessPointSetAccessPointType } from "./DescribeAccessPointsResponseBodyAccessPointSetAccessPointType";


export class DescribeAccessPointsResponseBodyAccessPointSet extends $dara.Model {
  accessPointType?: DescribeAccessPointsResponseBodyAccessPointSetAccessPointType[];
  static names(): { [key: string]: string } {
    return {
      accessPointType: 'AccessPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointType: { 'type': 'array', 'itemType': DescribeAccessPointsResponseBodyAccessPointSetAccessPointType },
    };
  }

  validate() {
    if(Array.isArray(this.accessPointType)) {
      $dara.Model.validateArray(this.accessPointType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

