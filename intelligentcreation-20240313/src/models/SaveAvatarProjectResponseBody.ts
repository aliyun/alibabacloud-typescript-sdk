// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAvatarProjectResponseBody extends $dara.Model {
  agentId?: string;
  errorCode?: string;
  errorMessage?: string;
  errorMsg?: string;
  projectId?: string;
  projectName?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      errorMsg: 'errorMsg',
      projectId: 'projectId',
      projectName: 'projectName',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      errorMsg: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

