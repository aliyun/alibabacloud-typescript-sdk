// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo } from "./DescribeVsDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo";


export class DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos extends $dara.Model {
  pvUvDataInfo?: DescribeVsDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo[];
  static names(): { [key: string]: string } {
    return {
      pvUvDataInfo: 'PvUvDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvUvDataInfo: { 'type': 'array', 'itemType': DescribeVsDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo },
    };
  }

  validate() {
    if(Array.isArray(this.pvUvDataInfo)) {
      $dara.Model.validateArray(this.pvUvDataInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

