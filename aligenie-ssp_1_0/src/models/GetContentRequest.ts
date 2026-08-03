// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContentRequest extends $dara.Model {
  /**
   * @remarks
   * Content ID
   * 
   * This parameter is required.
   * 
   * @example
   * 123123
   */
  id?: number;
  /**
   * @remarks
   * Default value: song
   * 
   * This parameter is required.
   * 
   * @example
   * song
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

