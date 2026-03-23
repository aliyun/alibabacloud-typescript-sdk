// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstancesRequest extends $dara.Model {
  gadInstanceName?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      gadInstanceName: 'GadInstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gadInstanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

