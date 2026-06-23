// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation to obtain the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The number of log lines to output.>Notice: Valid values: 1 to 5000. If the value exceeds the upper limit, an error is returned.</notice>.
   * 
   * This parameter is required.
   * 
   * @example
   * 500
   */
  lines?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      lines: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

