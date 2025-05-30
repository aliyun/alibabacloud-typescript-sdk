// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsByInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for the period.
   * 
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @remarks
   * The job(instance) ID.
   * 
   * @example
   * 20240730****ddlr
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that is used to run the MaxCompute job.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of MaxCompute project.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * ghijkl789012
   */
  signature?: string;
  /**
   * @remarks
   * Specification types.
   */
  specCodes?: string[];
  /**
   * @remarks
   * The start time for the period.
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * Metering types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectNames: 'projectNames',
      region: 'region',
      signature: 'signature',
      specCodes: 'specCodes',
      startDate: 'startDate',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      signature: 'string',
      specCodes: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectNames)) {
      $dara.Model.validateArray(this.projectNames);
    }
    if(Array.isArray(this.specCodes)) {
      $dara.Model.validateArray(this.specCodes);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

