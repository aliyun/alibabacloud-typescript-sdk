// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserSpnSummaryInfoResponseBodyRegionList extends $dara.Model {
  regionCode?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionCode: 'RegionCode',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionCode: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

