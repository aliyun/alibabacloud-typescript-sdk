// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

