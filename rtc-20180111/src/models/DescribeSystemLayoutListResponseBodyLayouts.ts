// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSystemLayoutListResponseBodyLayoutsLayout } from "./DescribeSystemLayoutListResponseBodyLayoutsLayout";


export class DescribeSystemLayoutListResponseBodyLayouts extends $dara.Model {
  layout?: DescribeSystemLayoutListResponseBodyLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeSystemLayoutListResponseBodyLayoutsLayout },
    };
  }

  validate() {
    if(Array.isArray(this.layout)) {
      $dara.Model.validateArray(this.layout);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

