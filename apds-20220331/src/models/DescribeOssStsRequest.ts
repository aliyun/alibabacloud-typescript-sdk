// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssStsRequest extends $dara.Model {
  ak?: string;
  cloudType?: string;
  region?: string;
  regionId?: string;
  sk?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'ak',
      cloudType: 'cloudType',
      region: 'region',
      regionId: 'regionId',
      sk: 'sk',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      cloudType: 'string',
      region: 'string',
      regionId: 'string',
      sk: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

