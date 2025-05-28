// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReportDefinitionRequest extends $dara.Model {
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123123
   */
  reportTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      nbid: 'Nbid',
      reportTaskId: 'ReportTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nbid: 'string',
      reportTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

