// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExistBindsByOuterIdRequest extends $dara.Model {
  appName?: string;
  minorOuterId?: string;
  outerId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      minorOuterId: 'MinorOuterId',
      outerId: 'OuterId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      minorOuterId: 'string',
      outerId: 'string',
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

