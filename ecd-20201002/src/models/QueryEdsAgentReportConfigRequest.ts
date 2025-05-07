// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEdsAgentReportConfigRequest extends $dara.Model {
  aliUid?: number;
  desktopId?: string;
  ecsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      desktopId: 'DesktopId',
      ecsInstanceId: 'EcsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      desktopId: 'string',
      ecsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

