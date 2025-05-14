// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConferenceInfoByRoomCodeShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      roomCode: 'roomCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      roomCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

