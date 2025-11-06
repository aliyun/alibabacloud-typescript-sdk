// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  exportType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      exportType: 'ExportType',
      instanceId: 'InstanceId',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      exportType: 'number',
      instanceId: 'string',
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

