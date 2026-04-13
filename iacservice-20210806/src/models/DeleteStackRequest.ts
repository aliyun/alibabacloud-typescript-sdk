// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStackRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  cleanResources?: boolean;
  static names(): { [key: string]: string } {
    return {
      cleanResources: 'cleanResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanResources: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

