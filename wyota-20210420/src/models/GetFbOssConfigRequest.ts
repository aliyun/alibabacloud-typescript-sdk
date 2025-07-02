// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFbOssConfigRequest extends $dara.Model {
  dirPrefix?: string;
  isDedicatedLine?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      dirPrefix: 'DirPrefix',
      isDedicatedLine: 'IsDedicatedLine',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

