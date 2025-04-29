// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhoneNumberAnalysisResponseBodyDataList } from "./DescribePhoneNumberAnalysisResponseBodyDataList";


export class DescribePhoneNumberAnalysisResponseBodyData extends $dara.Model {
  list?: DescribePhoneNumberAnalysisResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribePhoneNumberAnalysisResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

