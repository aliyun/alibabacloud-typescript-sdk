// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes extends $dara.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 123456xxx
   */
  id?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job_111
   */
  label?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      label: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

