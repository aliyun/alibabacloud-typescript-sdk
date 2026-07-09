// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReportDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the primary sales channel. If this parameter is left empty, the ID of the sales channel to which the current user belongs is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The ID of the bill subscription task.
   * 
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

