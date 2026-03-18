// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClientDTO extends $dara.Model {
  /**
   * @example
   * 杭州市
   */
  address?: string;
  /**
   * @example
   * 1,2,3
   */
  allowedModels?: string;
  /**
   * @example
   * st-xxxx
   */
  clientUuid?: string;
  /**
   * @example
   * 13800138000
   */
  contact?: string;
  /**
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0
   */
  main?: number;
  /**
   * @example
   * 我的客户
   */
  name?: string;
  /**
   * @example
   * 备注
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      allowedModels: 'allowedModels',
      clientUuid: 'clientUuid',
      contact: 'contact',
      deleteTag: 'deleteTag',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      main: 'main',
      name: 'name',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allowedModels: 'string',
      clientUuid: 'string',
      contact: 'string',
      deleteTag: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      main: 'number',
      name: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

