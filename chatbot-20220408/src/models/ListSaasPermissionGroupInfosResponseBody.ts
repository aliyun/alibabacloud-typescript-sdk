// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaasPermissionGroupInfosResponseBodyDataPgInfos extends $dara.Model {
  /**
   * @remarks
   * The code of the SaaS permission group.
   * 
   * @example
   * FAQ
   */
  pgCode?: string;
  /**
   * @remarks
   * The English name of the SaaS permission group.
   * 
   * @example
   * FAQ
   */
  pgEnName?: string;
  /**
   * @remarks
   * The Chinese name of the SaaS permission group.
   * 
   * @example
   * FAQ管理
   */
  pgName?: string;
  static names(): { [key: string]: string } {
    return {
      pgCode: 'PgCode',
      pgEnName: 'PgEnName',
      pgName: 'PgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pgCode: 'string',
      pgEnName: 'string',
      pgName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasPermissionGroupInfosResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The English name of the atomic page.
   * 
   * @example
   * Release Center
   */
  enName?: string;
  /**
   * @remarks
   * The Chinese name of the atomic page.
   * 
   * @example
   * 发布中心
   */
  name?: string;
  /**
   * @remarks
   * The list of SaaS permission groups.
   */
  pgInfos?: ListSaasPermissionGroupInfosResponseBodyDataPgInfos[];
  /**
   * @remarks
   * The unique identifier of the SaaS atomic page.
   * 
   * @example
   * FAQ
   */
  saasCode?: string;
  static names(): { [key: string]: string } {
    return {
      enName: 'EnName',
      name: 'Name',
      pgInfos: 'PgInfos',
      saasCode: 'SaasCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enName: 'string',
      name: 'string',
      pgInfos: { 'type': 'array', 'itemType': ListSaasPermissionGroupInfosResponseBodyDataPgInfos },
      saasCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pgInfos)) {
      $dara.Model.validateArray(this.pgInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaasPermissionGroupInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of permissions for each SaaS integration page.
   */
  data?: ListSaasPermissionGroupInfosResponseBodyData[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8AD9FA10-7780-5E12-B701-13C928524F32
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSaasPermissionGroupInfosResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

