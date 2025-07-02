// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppOtaVersionResponseBodyDataAppOtaInfoDTOList } from "./DescribeAppOtaVersionResponseBodyDataAppOtaInfoDtolist";


export class DescribeAppOtaVersionResponseBodyData extends $dara.Model {
  appOtaInfoDTOList?: DescribeAppOtaVersionResponseBodyDataAppOtaInfoDTOList[];
  static names(): { [key: string]: string } {
    return {
      appOtaInfoDTOList: 'AppOtaInfoDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appOtaInfoDTOList: { 'type': 'array', 'itemType': DescribeAppOtaVersionResponseBodyDataAppOtaInfoDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.appOtaInfoDTOList)) {
      $dara.Model.validateArray(this.appOtaInfoDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

