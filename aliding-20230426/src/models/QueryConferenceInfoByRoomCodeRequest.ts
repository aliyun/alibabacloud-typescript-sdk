// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryConferenceInfoByRoomCodeRequestTenantContext } from "./QueryConferenceInfoByRoomCodeRequestTenantContext";


export class QueryConferenceInfoByRoomCodeRequest extends $dara.Model {
  tenantContext?: QueryConferenceInfoByRoomCodeRequestTenantContext;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 583 480 813
   */
  roomCode?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      roomCode: 'roomCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: QueryConferenceInfoByRoomCodeRequestTenantContext,
      maxResults: 'number',
      nextToken: 'string',
      roomCode: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

