// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * codeup
   */
  sericeConnectionType?: string;
  static names(): { [key: string]: string } {
    return {
      sericeConnectionType: 'sericeConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sericeConnectionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

