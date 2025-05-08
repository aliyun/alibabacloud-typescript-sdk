// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionResourceRequest extends $dara.Model {
  ensRegionId?: string;
  ispType?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ispType: 'IspType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ispType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

