// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamJobsResponseBodyData extends $dara.Model {
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 716555
   */
  id?: number;
  /**
   * @example
   * flink_order_detail
   */
  jobName?: string;
  /**
   * @example
   * 300006788
   */
  modifierId?: string;
  /**
   * @example
   * 300006788
   */
  ownerId?: string;
  /**
   * @example
   * 7162269257990111
   */
  projectId?: string;
  /**
   * @example
   * 0
   */
  status?: string;
  /**
   * @example
   * FLINK_SQL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      id: 'Id',
      jobName: 'JobName',
      modifierId: 'ModifierId',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      id: 'number',
      jobName: 'string',
      modifierId: 'string',
      ownerId: 'string',
      projectId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStreamJobsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetStreamJobsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
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
      data: { 'type': 'array', 'itemType': GetStreamJobsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

