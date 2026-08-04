// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBindsByPkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      pk: 'Pk',
      tenantIds: 'TenantIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      pk: 'string',
      tenantIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.tenantIds) {
      $dara.Model.validateMap(this.tenantIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

