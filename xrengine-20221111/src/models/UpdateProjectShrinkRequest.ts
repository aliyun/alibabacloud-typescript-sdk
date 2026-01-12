// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectShrinkRequest extends $dara.Model {
  autoBuild?: boolean;
  extShrink?: string;
  intro?: string;
  jwtToken?: string;
  projectId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      extShrink: 'Ext',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      projectId: 'ProjectId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      extShrink: 'string',
      intro: 'string',
      jwtToken: 'string',
      projectId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

