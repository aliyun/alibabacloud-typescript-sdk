// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayJobResponseBodyRayJobs extends $dara.Model {
  /**
   * @example
   * Running
   */
  clusterState?: string;
  /**
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @example
   * 120
   */
  cuHours?: number;
  /**
   * @example
   * https://emr-ray-gateway.aliyuncs.com?token=xxxxxxxxx
   */
  dashboardUrl?: string;
  /**
   * @example
   * 3564
   */
  duration?: number;
  /**
   * @example
   * 1776945509000
   */
  endTime?: number;
  /**
   * @example
   * testRayJob
   */
  name?: string;
  /**
   * @example
   * err-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  resourceQueue?: string;
  /**
   * @example
   * 1776945499000
   */
  startTime?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * rj-uiulpgow9xljimm1
   */
  submissionId?: string;
  /**
   * @example
   * 1776945399000
   */
  submitTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterState: 'clusterState',
      creatorName: 'creatorName',
      cuHours: 'cuHours',
      dashboardUrl: 'dashboardUrl',
      duration: 'duration',
      endTime: 'endTime',
      name: 'name',
      resourceQueue: 'resourceQueue',
      startTime: 'startTime',
      status: 'status',
      submissionId: 'submissionId',
      submitTime: 'submitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterState: 'string',
      creatorName: 'string',
      cuHours: 'number',
      dashboardUrl: 'string',
      duration: 'number',
      endTime: 'number',
      name: 'string',
      resourceQueue: 'string',
      startTime: 'number',
      status: 'string',
      submissionId: 'string',
      submitTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRayJobResponseBody extends $dara.Model {
  rayJobs?: ListRayJobResponseBodyRayJobs[];
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      rayJobs: 'rayJobs',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rayJobs: { 'type': 'array', 'itemType': ListRayJobResponseBodyRayJobs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rayJobs)) {
      $dara.Model.validateArray(this.rayJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

