// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitFileRequestOptionAppProperties extends $dara.Model {
  /**
   * @example
   * property_name
   */
  name?: string;
  /**
   * @example
   * property_value
   */
  value?: string;
  /**
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

