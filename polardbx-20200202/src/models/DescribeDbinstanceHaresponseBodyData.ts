// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceHAResponseBodyData extends $dara.Model {
  primaryAzoneId?: string;
  primaryRegionId?: string;
  secondaryAzoneId?: string;
  secondaryRegionId?: string;
  topologyType?: string;
  static names(): { [key: string]: string } {
    return {
      primaryAzoneId: 'PrimaryAzoneId',
      primaryRegionId: 'PrimaryRegionId',
      secondaryAzoneId: 'SecondaryAzoneId',
      secondaryRegionId: 'SecondaryRegionId',
      topologyType: 'TopologyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryAzoneId: 'string',
      primaryRegionId: 'string',
      secondaryAzoneId: 'string',
      secondaryRegionId: 'string',
      topologyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

