// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDigitalTemplateDetailNewResponseBodyOssKeys extends $dara.Model {
  ossKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ossKey)) {
      $dara.Model.validateArray(this.ossKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

