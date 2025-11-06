// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureUserSettingRequest extends $dara.Model {
  bucketName?: string;
  consoleSessionId?: string;
  instanceId?: string;
  logstore?: string;
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  putType?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      consoleSessionId: 'ConsoleSessionId',
      instanceId: 'InstanceId',
      logstore: 'Logstore',
      projectName: 'ProjectName',
      putType: 'PutType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      consoleSessionId: 'string',
      instanceId: 'string',
      logstore: 'string',
      projectName: 'string',
      putType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

