// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader } from "./DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader";


export class DescribeApiHistoryResponseBodyServiceConfigMockHeaders extends $dara.Model {
  mockHeader?: DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader[];
  static names(): { [key: string]: string } {
    return {
      mockHeader: 'MockHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeader: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyServiceConfigMockHeadersMockHeader },
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

