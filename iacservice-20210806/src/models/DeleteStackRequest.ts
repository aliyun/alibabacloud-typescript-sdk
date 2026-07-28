// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStackRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to synchronously clean up resources managed by the stack. By default, resources are not cleaned up.
   * 
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

