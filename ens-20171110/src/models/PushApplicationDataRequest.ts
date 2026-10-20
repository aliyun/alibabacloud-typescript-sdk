// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushApplicationDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * Before calling this operation, activate the Edge Application Hosting service and create an application by calling CreateApplication. Obtain the AppId from the response of the CreateApplication operation.
   * 
   * This parameter is required.
   * 
   * @example
   * e76f8985-7965-41fc-925b-9648bb6bf650
   */
  appId?: string;
  /**
   * @remarks
   * The list of data files to be pre-pushed, in the string format of a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"name\\":\\"app01\\",       \\"version\\":\\"1.0\\",       \\"size\\":100,\\"archiveType\\":\\"tar.gz\\",       \\"md5\\":\\"\\",       \\"url\\":\\"http://xxxx\\",\\"timeout\\": 1000   },    {       \\"name\\":\\"app02\\",       \\"version\\":\\"1.1\\",       \\"size\\":10,\\"archiveType\\":\\"zip\\",       \\"md5\\":\\"xxxx\\",       \\"url\\":\\"http://xxxxxx\\",\\"timeout\\": 1000   }]
   */
  data?: string;
  /**
   * @remarks
   * The canary pre-push policy in JSON string format. Multiple distribution policies are supported. By default, all data is pre-pushed.
   * 
   * @example
   * {\\"name\\": \\"ScheduleToRegionId\\",  \\"parameters\\":{      \\"operator\\": \\"In\\",       \\"values\\": [\\"cn-chegndu-telecom-4\\", \\"cn-shanghai-cmcc-4\\"]  }}
   */
  pushStrategy?: string;
  /**
   * @remarks
   * This parameter is invalid.
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

