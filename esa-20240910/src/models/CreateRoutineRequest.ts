// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the Edge Routine.
   * 
   * @example
   * the description of this routine
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the Edge Routine contains asset files.
   * 
   * @example
   * false
   */
  hasAssets?: boolean;
  /**
   * @remarks
   * The name of the Edge Routine. The name must be unique within the same account.
   * 
   * This parameter is required.
   * 
   * @example
   * test-routine1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hasAssets: 'HasAssets',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hasAssets: 'boolean',
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

