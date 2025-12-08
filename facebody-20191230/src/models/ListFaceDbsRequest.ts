// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFaceDbsRequest extends $dara.Model {
  /**
   * @example
   * 50
   */
  limit?: number;
  /**
   * @example
   * 1
   */
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      offset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

