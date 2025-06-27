// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmSystemLinesResponseBodySystemLinesSystemLine } from "./DescribeCloudGtmSystemLinesResponseBodySystemLinesSystemLine";


export class DescribeCloudGtmSystemLinesResponseBodySystemLines extends $dara.Model {
  systemLine?: DescribeCloudGtmSystemLinesResponseBodySystemLinesSystemLine[];
  static names(): { [key: string]: string } {
    return {
      systemLine: 'SystemLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemLine: { 'type': 'array', 'itemType': DescribeCloudGtmSystemLinesResponseBodySystemLinesSystemLine },
    };
  }

  validate() {
    if(Array.isArray(this.systemLine)) {
      $dara.Model.validateArray(this.systemLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

