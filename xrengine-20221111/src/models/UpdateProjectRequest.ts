// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRequest extends $dara.Model {
  autoBuild?: boolean;
  ext?: { [key: string]: any };
  intro?: string;
  jwtToken?: string;
  projectId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      ext: 'Ext',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      intro: 'string',
      jwtToken: 'string',
      projectId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

