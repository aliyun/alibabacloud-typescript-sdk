// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBindsByOuterIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  minorOuterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

