// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoShowListTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the scheduled tasks. The following fields are included:
   * 
   * *   Status: the status of the scheduled task. Valid values: 0 and 1. A value of 0 indicates that the scheduled task is paused. A value of 1 indicates that the scheduled task is started.
   * *   LiveTemplate: the transcoding templates.
   * *   TranscodeConfig: the transcoding configuration for the source URL.
   * *   CasterId: the ID of the production studio.
   * 
   * @example
   * {"Status":0,"TranscodeConfig":{"CasterTemplate":"lp_hd", "LiveTemplate":["lhd","lsd"]}, "CasterId":"cce04ef3-2226-4865-8704-f84b8375****"}
   */
  autoShowListTasks?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoShowListTasks: 'AutoShowListTasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoShowListTasks: 'string',
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

