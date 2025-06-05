// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAirflowLoginTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af-b3a7f110a6vmvn7xxxxxx
   */
  airflowId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowId: 'AirflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

