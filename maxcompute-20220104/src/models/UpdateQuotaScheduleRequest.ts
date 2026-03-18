// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQuotaScheduleRequest extends $dara.Model {
  body?: string;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
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

