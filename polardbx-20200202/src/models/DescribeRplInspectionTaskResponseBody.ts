// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRplInspectionTaskResponseBodyDataInspectionTaskList extends $dara.Model {
  /**
   * @example
   * 2025-09-25T02:36:20.000+0000
   */
  createTime?: number;
  /**
   * @example
   * For database: wms ,Found SIMPLE sequences in 1.0. PolarDB-X 2.0 does not support SIMPLE sequence any more， please use show sequence to check them.
   */
  description?: string;
  /**
   * @example
   * 10142
   */
  id?: number;
  /**
   * @remarks
   * slinktaskid。
   * 
   * @example
   * etx-hzrez23btmb6aq
   */
  slinkTaskId?: string;
  /**
   * @example
   * CONNECTIVITY
   */
  stage?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
   * @example
   * 2025-09-23T03:25:21.000+0000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      slinkTaskId: 'SlinkTaskId',
      stage: 'Stage',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      id: 'number',
      slinkTaskId: 'string',
      stage: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRplInspectionTaskResponseBodyData extends $dara.Model {
  inspectionTaskList?: DescribeRplInspectionTaskResponseBodyDataInspectionTaskList[];
  /**
   * @example
   * PRE_CHECK
   */
  slinkStage?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskList: 'InspectionTaskList',
      slinkStage: 'SlinkStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskList: { 'type': 'array', 'itemType': DescribeRplInspectionTaskResponseBodyDataInspectionTaskList },
      slinkStage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionTaskList)) {
      $dara.Model.validateArray(this.inspectionTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRplInspectionTaskResponseBody extends $dara.Model {
  data?: DescribeRplInspectionTaskResponseBodyData;
  /**
   * @example
   * *****
   */
  message?: string;
  /**
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeRplInspectionTaskResponseBodyData,
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

