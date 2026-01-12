// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSourceRequest extends $dara.Model {
  changeStatus?: boolean;
  jwtToken?: string;
  needCheck?: boolean;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      changeStatus: 'ChangeStatus',
      jwtToken: 'JwtToken',
      needCheck: 'NeedCheck',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeStatus: 'boolean',
      jwtToken: 'string',
      needCheck: 'boolean',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

