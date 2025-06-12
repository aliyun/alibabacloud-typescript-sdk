// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BridgeRtcCallResponseBodyData extends $dara.Model {
  instanceId?: string;
  jobId?: string;
  tokenInfo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      tokenInfo: 'TokenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      tokenInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

