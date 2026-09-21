// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BTeam } from "./E2bteam";


export class UpdateTeamResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 7ADFF8D8-D4BA-5F79-AD49-DDABFEA59B6C
   */
  requestId?: string;
  team?: E2BTeam;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      team: 'team',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      team: E2BTeam,
    };
  }

  validate() {
    if(this.team && typeof (this.team as any).validate === 'function') {
      (this.team as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

