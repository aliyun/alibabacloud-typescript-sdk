// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDjbhReportRequest extends $dara.Model {
  /**
   * @remarks
   * Primary key ID of the report.
   * 
   * This parameter is required.
   * 
   * @example
   * 26579
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

