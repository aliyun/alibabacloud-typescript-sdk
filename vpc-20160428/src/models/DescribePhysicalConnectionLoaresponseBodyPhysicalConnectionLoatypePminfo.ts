// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo } from "./DescribePhysicalConnectionLoaresponseBodyPhysicalConnectionLoatypePminfoPminfo";


export class DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfo extends $dara.Model {
  PMInfo?: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo[];
  static names(): { [key: string]: string } {
    return {
      PMInfo: 'PMInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PMInfo: { 'type': 'array', 'itemType': DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo },
    };
  }

  validate() {
    if(Array.isArray(this.PMInfo)) {
      $dara.Model.validateArray(this.PMInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

