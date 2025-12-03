// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultimodeCmsUrlResponseBody extends $dara.Model {
  clusterId?: string;
  multimodCmsUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      multimodCmsUrl: 'MultimodCmsUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      multimodCmsUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

