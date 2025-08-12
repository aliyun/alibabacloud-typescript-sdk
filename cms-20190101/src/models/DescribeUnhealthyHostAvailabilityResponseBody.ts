// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the availability monitoring task.
   * 
   * @example
   * 123456
   */
  id?: number;
  instanceList?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceList: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList,
    };
  }

  validate() {
    if(this.instanceList && typeof (this.instanceList as any).validate === 'function') {
      (this.instanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList extends $dara.Model {
  nodeTaskInstance?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstance[];
  static names(): { [key: string]: string } {
    return {
      nodeTaskInstance: 'NodeTaskInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTaskInstance: { 'type': 'array', 'itemType': DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstance },
    };
  }

  validate() {
    if(Array.isArray(this.nodeTaskInstance)) {
      $dara.Model.validateArray(this.nodeTaskInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ACBDBB40-DFB6-4F4C-8957-51FFB233969C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The unhealthy instances that are detected by the specified availability monitoring tasks.
   */
  unhealthyList?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      unhealthyList: 'UnhealthyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      unhealthyList: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList,
    };
  }

  validate() {
    if(this.unhealthyList && typeof (this.unhealthyList as any).validate === 'function') {
      (this.unhealthyList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

