// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  tequestId?: string;
  static names(): { [key: string]: string } {
    return {
      tequestId: 'tequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

