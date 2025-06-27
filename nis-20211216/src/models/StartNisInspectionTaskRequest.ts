// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartNisInspectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ni-8svmpe0yso****r7fh79
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

