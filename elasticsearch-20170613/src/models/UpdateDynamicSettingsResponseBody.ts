// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDynamicSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the dynamic settings were successfully updated.
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

