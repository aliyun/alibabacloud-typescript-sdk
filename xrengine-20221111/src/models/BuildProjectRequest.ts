// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildProjectRequest extends $dara.Model {
  jwtToken?: string;
  projectId?: string;
  videoName?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
      videoName: 'VideoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      projectId: 'string',
      videoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

