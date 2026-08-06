// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BTeam } from "./E2bteam";


export class CreateTeamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B5AD8B54-4358-5F5B-ACAA-52F2016459C6
   */
  requestId?: string;
  /**
   * @remarks
   * The Team information.
   */
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

