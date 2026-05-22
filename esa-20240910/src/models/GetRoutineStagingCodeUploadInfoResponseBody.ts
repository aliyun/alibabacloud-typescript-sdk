// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineStagingCodeUploadInfoResponseBody extends $dara.Model {
  codeVersion?: string;
  ossPostConfig?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      ossPostConfig: 'OssPostConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
      ossPostConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.ossPostConfig) {
      $dara.Model.validateMap(this.ossPostConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

