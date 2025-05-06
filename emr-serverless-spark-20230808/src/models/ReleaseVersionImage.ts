// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseVersionImage extends $dara.Model {
  cpuArchitecture?: string;
  imageId?: string;
  runtimeEngineType?: string;
  static names(): { [key: string]: string } {
    return {
      cpuArchitecture: 'cpuArchitecture',
      imageId: 'imageId',
      runtimeEngineType: 'runtimeEngineType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuArchitecture: 'string',
      imageId: 'string',
      runtimeEngineType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

