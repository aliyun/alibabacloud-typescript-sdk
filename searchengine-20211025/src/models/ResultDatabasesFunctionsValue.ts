// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResultDatabasesFunctionsValue extends $dara.Model {
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * gfasdds2****2wfrkv
   */
  signatures?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      signatures: 'signatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      signatures: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

