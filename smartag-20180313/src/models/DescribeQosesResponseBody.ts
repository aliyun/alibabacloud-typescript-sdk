// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosesResponseBodyQosesQos extends $dara.Model {
  qosDescription?: string;
  qosId?: string;
  qosName?: string;
  resourceGroupId?: string;
  sagCount?: string;
  smartAGIds?: string;
  static names(): { [key: string]: string } {
    return {
      qosDescription: 'QosDescription',
      qosId: 'QosId',
      qosName: 'QosName',
      resourceGroupId: 'ResourceGroupId',
      sagCount: 'SagCount',
      smartAGIds: 'SmartAGIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosDescription: 'string',
      qosId: 'string',
      qosName: 'string',
      resourceGroupId: 'string',
      sagCount: 'string',
      smartAGIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponseBodyQoses extends $dara.Model {
  qos?: DescribeQosesResponseBodyQosesQos[];
  static names(): { [key: string]: string } {
    return {
      qos: 'Qos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qos: { 'type': 'array', 'itemType': DescribeQosesResponseBodyQosesQos },
    };
  }

  validate() {
    if(Array.isArray(this.qos)) {
      $dara.Model.validateArray(this.qos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  qoses?: DescribeQosesResponseBodyQoses;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2B5F35DD-0D66-41FC-AA99-BAE473E1A7A2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of QoS polices.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qoses: 'Qoses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      qoses: DescribeQosesResponseBodyQoses,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.qoses && typeof (this.qoses as any).validate === 'function') {
      (this.qoses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

