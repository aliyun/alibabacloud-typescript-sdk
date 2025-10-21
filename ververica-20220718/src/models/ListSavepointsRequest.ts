// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSavepointsRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment ID. This parameter is optional.
   * 
   * @example
   * 88a8fc49-e090-430a-85d8-3ee8c79c****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The job ID. This parameter is optional.
   * 
   * @example
   * 99a8fc49-e090-430a-85d8-3ee8c79c****
   */
  jobId?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      jobId: 'jobId',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      jobId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

