// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientDTO } from "./ClientDto";


export class MemberApiKeyDTO extends $dara.Model {
  /**
   * @remarks
   * The parent department information.
   */
  client?: ClientDTO;
  /**
   * @remarks
   * The ID of the parent department. Member keys are mapped to their parent departments.
   * 
   * @example
   * 438
   */
  clientId?: number;
  /**
   * @remarks
   * The deletion tag. A value of 0 indicates that the key is enabled, and a non-zero value indicates that the key is disabled.
   * 
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @remarks
   * The expiration time. A null value indicates that the key never expires.
   * 
   * @example
   * 2026-12-31T00:00:00Z
   */
  expireAt?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-03T18:41:40+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-08-03T18:41:40+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The API key ID. This ID can be used to query the bound group by API key.
   * 
   * @example
   * 502
   */
  id?: number;
  /**
   * @remarks
   * The full key. This field is not returned in the member list and is always empty.
   */
  key?: string;
  /**
   * @remarks
   * The masked preview of the API key.
   * 
   * @example
   * sk-us****9876
   */
  keyPreview?: string;
  /**
   * @remarks
   * The ID of the department member to whom the key belongs.
   * 
   * @example
   * 304
   */
  memberUserId?: number;
  /**
   * @remarks
   * The member name.
   * 
   * @example
   * Zhang San
   */
  memberUserName?: string;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * Zhang San\\"s key
   */
  name?: string;
  /**
   * @remarks
   * The status. Valid values: active: Enabled. disabled: Disabled.
   * 
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

