// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SessionClusterFailureInfo } from "./SessionClusterFailureInfo";
import { SessionClusterRunningInfo } from "./SessionClusterRunningInfo";


export class SessionClusterStatus extends $dara.Model {
  currentSessionClusterStatus?: string;
  failure?: SessionClusterFailureInfo;
  running?: SessionClusterRunningInfo;
  static names(): { [key: string]: string } {
    return {
      currentSessionClusterStatus: 'currentSessionClusterStatus',
      failure: 'failure',
      running: 'running',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentSessionClusterStatus: 'string',
      failure: SessionClusterFailureInfo,
      running: SessionClusterRunningInfo,
    };
  }

  validate() {
    if(this.failure && typeof (this.failure as any).validate === 'function') {
      (this.failure as any).validate();
    }
    if(this.running && typeof (this.running as any).validate === 'function') {
      (this.running as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

