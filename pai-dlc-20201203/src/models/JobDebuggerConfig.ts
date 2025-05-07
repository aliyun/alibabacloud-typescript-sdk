// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobDebuggerConfig extends $dara.Model {
  debuggerConfigContent?: string;
  debuggerConfigId?: string;
  gmtCreateTime?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      debuggerConfigContent: 'DebuggerConfigContent',
      debuggerConfigId: 'DebuggerConfigId',
      gmtCreateTime: 'GmtCreateTime',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuggerConfigContent: 'string',
      debuggerConfigId: 'string',
      gmtCreateTime: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

