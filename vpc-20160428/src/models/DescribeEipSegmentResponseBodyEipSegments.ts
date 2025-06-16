// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipSegmentResponseBodyEipSegmentsEipSegment } from "./DescribeEipSegmentResponseBodyEipSegmentsEipSegment";


export class DescribeEipSegmentResponseBodyEipSegments extends $dara.Model {
  eipSegment?: DescribeEipSegmentResponseBodyEipSegmentsEipSegment[];
  static names(): { [key: string]: string } {
    return {
      eipSegment: 'EipSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipSegment: { 'type': 'array', 'itemType': DescribeEipSegmentResponseBodyEipSegmentsEipSegment },
    };
  }

  validate() {
    if(Array.isArray(this.eipSegment)) {
      $dara.Model.validateArray(this.eipSegment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

