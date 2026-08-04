// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientDTO } from "./ClientDto";


export class MemberApiKeyDTO extends $dara.Model {
  client?: ClientDTO;
  /**
   * @example
   * 438
   */
  clientId?: number;
  /**
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @example
   * 2026-12-31T00:00:00Z
   */
  expireAt?: string;
  /**
   * @example
   * 2026-08-03T18:41:40+08:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-08-03T18:41:40+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * 502
   */
  id?: number;
  key?: string;
  /**
   * @example
   * sk-us****9876
   */
  keyPreview?: string;
  /**
   * @example
   * 304
   */
  memberUserId?: number;
  /**
   * @example
   * John
   */
  memberUserName?: string;
  /**
   * @example
   * John\\"s Key
   */
  name?: string;
  /**
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      client: 'client',
      clientId: 'clientId',
      deleteTag: 'deleteTag',
      expireAt: 'expireAt',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      key: 'key',
      keyPreview: 'keyPreview',
      memberUserId: 'memberUserId',
      memberUserName: 'memberUserName',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: ClientDTO,
      clientId: 'number',
      deleteTag: 'number',
      expireAt: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      key: 'string',
      keyPreview: 'string',
      memberUserId: 'number',
      memberUserName: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.client && typeof (this.client as any).validate === 'function') {
      (this.client as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

