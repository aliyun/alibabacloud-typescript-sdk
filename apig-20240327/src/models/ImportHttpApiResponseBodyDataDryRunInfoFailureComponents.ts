// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportHttpApiResponseBodyDataDryRunInfoFailureComponents extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The data struct is incorrectly defined.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The data struct name.
   * 
   * @example
   * orderDTO
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
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

