// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiResponseBodyServiceConfigMockHeadersMockHeader } from "./DescribeApiResponseBodyServiceConfigMockHeadersMockHeader";


export class DescribeApiResponseBodyServiceConfigMockHeaders extends $dara.Model {
  mockHeader?: DescribeApiResponseBodyServiceConfigMockHeadersMockHeader[];
  static names(): { [key: string]: string } {
    return {
      mockHeader: 'MockHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeader: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceConfigMockHeadersMockHeader },
    };
  }

  validate() {
    if(Array.isArray(this.mockHeader)) {
      $dara.Model.validateArray(this.mockHeader);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

