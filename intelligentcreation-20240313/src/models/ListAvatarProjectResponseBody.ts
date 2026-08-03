// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvatarProjectResponseBodyQueryAvatarProjectResultList extends $dara.Model {
  agentId?: string;
  errorMsg?: string;
  projectId?: string;
  projectName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      errorMsg: 'errorMsg',
      projectId: 'projectId',
      projectName: 'projectName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      errorMsg: 'string',
      projectId: 'string',
      projectName: 'string',
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

export class ListAvatarProjectResponseBody extends $dara.Model {
  queryAvatarProjectResultList?: ListAvatarProjectResponseBodyQueryAvatarProjectResultList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryAvatarProjectResultList: 'queryAvatarProjectResultList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryAvatarProjectResultList: { 'type': 'array', 'itemType': ListAvatarProjectResponseBodyQueryAvatarProjectResultList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryAvatarProjectResultList)) {
      $dara.Model.validateArray(this.queryAvatarProjectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

