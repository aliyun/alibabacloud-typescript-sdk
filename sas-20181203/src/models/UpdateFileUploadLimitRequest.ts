// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileUploadLimitRequest extends $dara.Model {
  /**
   * @remarks
   * The QPS limit on the files uploaded from the client. Valid values: 100 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

