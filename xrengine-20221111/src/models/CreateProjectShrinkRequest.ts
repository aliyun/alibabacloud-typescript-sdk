// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectShrinkRequest extends $dara.Model {
  autoBuild?: boolean;
  dependencies?: string;
  extInfo?: string;
  gender?: string;
  height?: number;
  intro?: string;
  jwtToken?: string;
  mapUuid?: string;
  method?: string;
  mode?: string;
  title?: string;
  tryOnParamsShrink?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      dependencies: 'Dependencies',
      extInfo: 'ExtInfo',
      gender: 'Gender',
      height: 'Height',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      mapUuid: 'MapUuid',
      method: 'Method',
      mode: 'Mode',
      title: 'Title',
      tryOnParamsShrink: 'TryOnParams',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      dependencies: 'string',
      extInfo: 'string',
      gender: 'string',
      height: 'number',
      intro: 'string',
      jwtToken: 'string',
      mapUuid: 'string',
      method: 'string',
      mode: 'string',
      title: 'string',
      tryOnParamsShrink: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

