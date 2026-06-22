// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInterceptionTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The list of network object IDs to delete.
   * > You can call the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,11,111
   */
  targetIds?: string;
  static names(): { [key: string]: string } {
    return {
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

