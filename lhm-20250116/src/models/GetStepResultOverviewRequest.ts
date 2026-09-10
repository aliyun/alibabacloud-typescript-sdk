// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStepResultOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the validation result.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001
   */
  resultId?: string;
  static names(): { [key: string]: string } {
    return {
      resultId: 'resultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

