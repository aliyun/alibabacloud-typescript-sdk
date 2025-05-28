// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserSpnSummaryInfoResponseBodyRegionList } from "./DescribeUserSpnSummaryInfoResponseBodyRegionList";
import { DescribeUserSpnSummaryInfoResponseBodySpnCodeAndTypeList } from "./DescribeUserSpnSummaryInfoResponseBodySpnCodeAndTypeList";


export class DescribeUserSpnSummaryInfoResponseBody extends $dara.Model {
  instanceFamilyList?: string[];
  regionList?: DescribeUserSpnSummaryInfoResponseBodyRegionList[];
  requestId?: string;
  spnCodeAndTypeList?: DescribeUserSpnSummaryInfoResponseBodySpnCodeAndTypeList[];
  static names(): { [key: string]: string } {
    return {
      instanceFamilyList: 'InstanceFamilyList',
      regionList: 'RegionList',
      requestId: 'RequestId',
      spnCodeAndTypeList: 'SpnCodeAndTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceFamilyList: { 'type': 'array', 'itemType': 'string' },
      regionList: { 'type': 'array', 'itemType': DescribeUserSpnSummaryInfoResponseBodyRegionList },
      requestId: 'string',
      spnCodeAndTypeList: { 'type': 'array', 'itemType': DescribeUserSpnSummaryInfoResponseBodySpnCodeAndTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.instanceFamilyList)) {
      $dara.Model.validateArray(this.instanceFamilyList);
    }
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    if(Array.isArray(this.spnCodeAndTypeList)) {
      $dara.Model.validateArray(this.spnCodeAndTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

