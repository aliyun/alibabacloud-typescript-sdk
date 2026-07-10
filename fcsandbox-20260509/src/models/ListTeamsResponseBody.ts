// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BTeam } from "./E2bteam";


export class ListTeamsResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  teams?: E2BTeam[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      teams: 'teams',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      teams: { 'type': 'array', 'itemType': E2BTeam },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.teams)) {
      $dara.Model.validateArray(this.teams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

