// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PmsEventReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

