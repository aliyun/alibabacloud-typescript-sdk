// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistApplicationDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. To obtain the application ID, see ListApplications.
   * 
   * This parameter is required.
   * 
   * @example
   * e76f8985-7965-41fc-925b-9648bb6bf650
   */
  appId?: string;
  /**
   * @remarks
   * The list of data files to distribute, formatted as a JSON array string.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"name\\":\\"app01\\",        \\"version\\":\\"1.0\\",        \\"destPath\\":\\"/root/installed\\",        \\"decompress\\":true,        \\"targetDirName\\":\\"target01\\",        \\"fileMode\\":755,        \\"timeout\\":1000    },    {        \\"name\\":\\"app02\\",        \\"version\\":\\"1.1\\",        \\"destPath\\":\\"/tmp/test.txt\\",        \\"decompress\\":false    }]
   */
  data?: string;
  /**
   * @remarks
   * The canary release distribution strategy, formatted as a JSON string. Multiple distribution strategies are supported. Default value: full distribution.
   * 
   * @example
   * {\\"name\\":\\"ScheduleToAllByMatchExpressions\\",\\"parameters\\":{\\"match_expressions\\":[{\\"key\\":\\"region_id\\",\\"operator\\":\\"In\\",\\"values\\":[\\"cn-wuhan-telecom_unicom_cmcc-2\\"]}]}}
   */
  distStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      data: 'Data',
      distStrategy: 'DistStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      data: 'string',
      distStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

