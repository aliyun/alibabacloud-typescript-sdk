// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which can be obtained by calling the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The number of log entries to output.
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

