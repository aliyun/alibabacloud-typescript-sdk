// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StackInfoExtInfo } from "./StackInfoExtInfo";


export class StackInfo extends $dara.Model {
  api?: string;
  duration?: number;
  exception?: string;
  extInfo?: StackInfoExtInfo;
  line?: string;
  rpcId?: string;
  serviceName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      duration: 'duration',
      exception: 'exception',
      extInfo: 'extInfo',
      line: 'line',
      rpcId: 'rpcId',
      serviceName: 'serviceName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      duration: 'number',
      exception: 'string',
      extInfo: StackInfoExtInfo,
      line: 'string',
      rpcId: 'string',
      serviceName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(this.extInfo && typeof (this.extInfo as any).validate === 'function') {
      (this.extInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

