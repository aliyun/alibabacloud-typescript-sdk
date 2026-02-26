// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FunctionCall extends $dara.Model {
  /**
   * @remarks
   * The parameters detected by the large language model.
   */
  arguments?: string;
  /**
   * @remarks
   * The function name.
   * 
   * This parameter is required.
   * 
   * @example
   * search_file
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
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

