// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
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

