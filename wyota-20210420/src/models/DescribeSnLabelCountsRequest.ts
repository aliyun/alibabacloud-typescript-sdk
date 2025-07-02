// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnLabelCountsRequest extends $dara.Model {
  labelList?: string[];
  tenantId?: string;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      labelList: 'LabelList',
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelList: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelList)) {
      $dara.Model.validateArray(this.labelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

