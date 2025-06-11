// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTagRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the tag group.
   * 
   * This parameter is required.
   * 
   * @example
   * Tag group 2
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

