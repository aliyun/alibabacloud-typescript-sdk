// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStartStreamsResponseBodyResults extends $dara.Model {
  /**
   * @example
   * stream not found
   */
  error?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 31000000*****0000002
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

