// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInterceptionTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the network objects that you want to remove. You can call the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to query the IDs of the network objects.
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

