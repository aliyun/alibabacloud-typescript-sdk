// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmDjbhReportRequest extends $dara.Model {
  /**
   * @remarks
   * Primary key ID of the report.
   * 
   * @example
   * 24563
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

