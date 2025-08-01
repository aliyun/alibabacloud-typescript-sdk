// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallMonitorAgentResponseBody extends $dara.Model {
  /**
   * @example
   * DB070C80-45AC-52CA-8101-937C25DA****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

