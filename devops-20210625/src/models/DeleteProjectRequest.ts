// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7fb72727f32143574f7a...
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

