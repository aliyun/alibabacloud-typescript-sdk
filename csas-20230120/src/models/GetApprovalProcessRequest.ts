// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalProcessRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

