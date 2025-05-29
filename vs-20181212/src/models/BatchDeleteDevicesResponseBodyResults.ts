// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * Device not found
   */
  error?: string;
  /**
   * @example
   * 323884****9092996
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

