// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDesktopRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desktopId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      desktopId: 'DesktopId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      desktopId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

