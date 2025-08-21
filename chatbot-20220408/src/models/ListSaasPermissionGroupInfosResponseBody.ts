// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaasPermissionGroupInfosResponseBodyDataPgInfos extends $dara.Model {
  /**
   * @example
   * FAQ
   */
  pgCode?: string;
  /**
   * @example
   * FAQ
   */
  pgEnName?: string;
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
   * @example
   * Release Center
   */
  enName?: string;
  name?: string;
  pgInfos?: ListSaasPermissionGroupInfosResponseBodyDataPgInfos[];
  /**
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

