// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDefinitionAsynchronousRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  importType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ossUrl?: string;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      importType: 'ImportType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ossUrl: 'OssUrl',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      importType: 'number',
      instanceId: 'string',
      instanceName: 'string',
      ossUrl: 'string',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

