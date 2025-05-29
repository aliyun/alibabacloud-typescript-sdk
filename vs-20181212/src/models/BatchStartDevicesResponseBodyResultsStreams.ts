// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStartDevicesResponseBodyResultsStreams extends $dara.Model {
  /**
   * @example
   * Stream not found
   */
  error?: string;
  /**
   * @example
   * 3238848****092997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 310101*****187542126
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

