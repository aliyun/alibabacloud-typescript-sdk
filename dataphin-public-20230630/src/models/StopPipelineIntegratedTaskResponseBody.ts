// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopPipelineIntegratedTaskResponseBodyDataDevOpsActionResDTOList extends $dara.Model {
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * eedsauto
   */
  jobName?: string;
  /**
   * @remarks
   * The job owner.
   * 
   * @example
   * 1692173406264688
   */
  owner?: string;
  /**
   * @remarks
   * The operation status.
   * 
   * @example
   * FAIED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
      owner: 'Owner',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      owner: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelineIntegratedTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The stop results for each instance.
   */
  devOpsActionResDTOList?: StopPipelineIntegratedTaskResponseBodyDataDevOpsActionResDTOList[];
  /**
   * @remarks
   * The number of failed stops.
   * 
   * @example
   * 0
   */
  fail?: number;
  /**
   * @remarks
   * The number of successful stops.
   * 
   * @example
   * 1
   */
  success?: number;
  static names(): { [key: string]: string } {
    return {
      devOpsActionResDTOList: 'DevOpsActionResDTOList',
      fail: 'Fail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devOpsActionResDTOList: { 'type': 'array', 'itemType': StopPipelineIntegratedTaskResponseBodyDataDevOpsActionResDTOList },
      fail: 'number',
      success: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.devOpsActionResDTOList)) {
      $dara.Model.validateArray(this.devOpsActionResDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelineIntegratedTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The batch results of stopping integrated incremental and full instances.
   */
  data?: StopPipelineIntegratedTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StopPipelineIntegratedTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

