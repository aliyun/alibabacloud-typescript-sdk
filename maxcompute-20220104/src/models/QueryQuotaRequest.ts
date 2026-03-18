// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaRequest extends $dara.Model {
  akProven?: string;
  mock?: boolean;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      akProven: 'AkProven',
      mock: 'mock',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProven: 'string',
      mock: 'boolean',
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

