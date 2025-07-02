// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOtaTaskVersionInfoResponseBodyData extends $dara.Model {
  releaseNote?: string;
  size?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
      size: 'Size',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: 'string',
      size: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

