// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values: DEV for development and PROD for production.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The mapping ID of the real-time task.
   * 
   * @example
   * 716555
   */
  id?: number;
  /**
   * @remarks
   * The name of the real-time task.
   * 
   * @example
   * flink_order_detail
   */
  jobName?: string;
  /**
   * @remarks
   * The ID of the last modifier.
   * 
   * @example
   * 300006788
   */
  modifierId?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 300006788
   */
  ownerId?: string;
  /**
   * @remarks
   * The Dataphin project ID.
   * 
   * @example
   * 7162269257990111
   */
  projectId?: string;
  /**
   * @remarks
   * The task status. Valid values: 0 (Draft), 1 (Submitting), 2 (Submitted), 3 (Published), and 100 (Developing).
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The task type. Valid values: FLINK_SQL and FLINK_DATASTREAM.
   * 
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
   * @remarks
   * The backend status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetStreamJobsResponseBodyData[];
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
   * The backend exception details.
   * 
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

