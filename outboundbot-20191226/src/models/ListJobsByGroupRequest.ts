// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsByGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @example
   * NoAnswer
   */
  jobFailureReason?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * de48407d-309e-451a-81ec-6fb11f8fdbf3
   */
  jobGroupId?: string;
  /**
   * @example
   * Succeeded
   */
  jobStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobFailureReason: 'JobFailureReason',
      jobGroupId: 'JobGroupId',
      jobStatus: 'JobStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobFailureReason: 'string',
      jobGroupId: 'string',
      jobStatus: 'string',
      pageNumber: 'number',
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

