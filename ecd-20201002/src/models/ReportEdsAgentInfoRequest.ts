// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportEdsAgentInfoRequest extends $dara.Model {
  aliUid?: number;
  desktopId?: string;
  ecsInstanceId?: string;
  edsAgentInfo?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      desktopId: 'DesktopId',
      ecsInstanceId: 'EcsInstanceId',
      edsAgentInfo: 'EdsAgentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      desktopId: 'string',
      ecsInstanceId: 'string',
      edsAgentInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

