// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationContentsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 332066440109224007
   */
  processInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      processInstanceId: 'ProcessInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

