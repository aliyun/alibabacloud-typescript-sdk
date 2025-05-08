// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushApplicationDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * e76f8985-7965-41fc-925b-9648bb6bf650
   */
  appId?: string;
  /**
   * @remarks
   * The data files that you want to push. The value must be a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"name\\":\\"app01\\",       \\"version\\":\\"1.0\\",       \\"size\\":100,\\"archiveType\\":\\"tar.gz\\",       \\"md5\\":\\"\\",       \\"url\\":\\"http://xxxx\\",\\"timeout\\": 1000   },    {       \\"name\\":\\"app02\\",       \\"version\\":\\"1.1\\",       \\"size\\":10,\\"archiveType\\":\\"zip\\",       \\"md5\\":\\"xxxx\\",       \\"url\\":\\"http://xxxxxx\\",\\"timeout\\": 1000   }]
   */
  data?: string;
  /**
   * @remarks
   * The push policy in the canary release environment. The value must be a JSON string. You can specify multiple push policies. By default, all data files are pushed.
   * 
   * @example
   * {\\"name\\": \\"ScheduleToRegionId\\",  \\"parameters\\":{      \\"operator\\": \\"In\\",       \\"values\\": [\\"cn-chegndu-telecom-4\\", \\"cn-shanghai-cmcc-4\\"]  }}
   */
  pushStrategy?: string;
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      data: 'Data',
      pushStrategy: 'PushStrategy',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      data: 'string',
      pushStrategy: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

