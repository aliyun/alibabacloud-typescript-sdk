// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSaseUserTagRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the employee tag.
   * 
   * @example
   * These are the company\\"s employees
   */
  description?: string;
  /**
   * @remarks
   * The name of the user tag.
   * 
   * @example
   * boss
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

