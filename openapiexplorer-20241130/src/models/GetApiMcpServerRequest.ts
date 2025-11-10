// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v6ZZ7ftCzEILW***
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

