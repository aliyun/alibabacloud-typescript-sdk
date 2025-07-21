// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFbOssConfigRequest extends $dara.Model {
  areaSite?: string;
  dirPrefix?: string;
  isDedicatedLine?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      areaSite: 'AreaSite',
      dirPrefix: 'DirPrefix',
      isDedicatedLine: 'IsDedicatedLine',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaSite: 'string',
      dirPrefix: 'string',
      isDedicatedLine: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

