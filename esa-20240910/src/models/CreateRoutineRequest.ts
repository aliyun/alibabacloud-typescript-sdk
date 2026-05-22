// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineRequest extends $dara.Model {
  /**
   * @remarks
   * The routine description.
   * 
   * @example
   * the description of this routine
   */
  description?: string;
  hasAssets?: boolean;
  /**
   * @remarks
   * The routine name, which must be unique in the same account.
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

