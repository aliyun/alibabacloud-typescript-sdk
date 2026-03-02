// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LaneMqGroupInfo } from "./LaneMqGroupInfo";


export class MicroServiceDigest extends $dara.Model {
  serviceId?: number;
  serviceName?: string;
  laneMqGroupInfos?: LaneMqGroupInfo;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      laneMqGroupInfos: 'laneMqGroupInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'number',
      serviceName: 'string',
      laneMqGroupInfos: LaneMqGroupInfo,
    };
  }

  validate() {
    if(this.laneMqGroupInfos && typeof (this.laneMqGroupInfos as any).validate === 'function') {
      (this.laneMqGroupInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

