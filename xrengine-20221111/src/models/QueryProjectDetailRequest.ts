// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectDetailRequest extends $dara.Model {
  jwtToken?: string;
  ossKey?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      ossKey: 'OssKey',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      ossKey: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

