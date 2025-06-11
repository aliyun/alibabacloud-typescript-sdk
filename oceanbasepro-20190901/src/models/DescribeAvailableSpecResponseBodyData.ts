// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableSpecResponseBodyDataAvailableSpecifications } from "./DescribeAvailableSpecResponseBodyDataAvailableSpecifications";


export class DescribeAvailableSpecResponseBodyData extends $dara.Model {
  availableSpecifications?: DescribeAvailableSpecResponseBodyDataAvailableSpecifications[];
  static names(): { [key: string]: string } {
    return {
      availableSpecifications: 'AvailableSpecifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpecifications: { 'type': 'array', 'itemType': DescribeAvailableSpecResponseBodyDataAvailableSpecifications },
    };
  }

  validate() {
    if(Array.isArray(this.availableSpecifications)) {
      $dara.Model.validateArray(this.availableSpecifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

