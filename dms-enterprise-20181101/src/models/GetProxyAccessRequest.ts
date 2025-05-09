// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProxyAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID that Data Management (DMS) generates after the user is authorized to enable the secure access proxy feature for an instance. The ID is unique in DMS. You can call the [ListProxyAccesses](https://help.aliyun.com/document_detail/295386.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  proxyAccessId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      proxyAccessId: 'ProxyAccessId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyAccessId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

