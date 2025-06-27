// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNisInspectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ni-209d****wfirfwc2yl
   */
  inspectionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskId: 'InspectionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

