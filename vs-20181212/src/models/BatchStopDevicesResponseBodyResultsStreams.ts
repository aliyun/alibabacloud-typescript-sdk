// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStopDevicesResponseBodyResultsStreams extends $dara.Model {
  /**
   * @example
   * Stream not found
   */
  error?: string;
  /**
   * @example
   * 323884****9092997
   */
  id?: string;
  /**
   * @example
   * 32388*****39092997
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

