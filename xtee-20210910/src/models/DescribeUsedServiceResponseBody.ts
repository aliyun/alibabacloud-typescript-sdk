// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsedServiceResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * English name
   * 
   * @example
   * account_abuse
   */
  enName?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * 注册风险识别服务
   */
  name?: string;
  /**
   * @remarks
   * Service code
   * 
   * @example
   * account_abuse
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      enName: 'enName',
      name: 'name',
      serviceCode: 'serviceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enName: 'string',
      name: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsedServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Record details
   */
  records?: DescribeUsedServiceResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      records: { 'type': 'array', 'itemType': DescribeUsedServiceResponseBodyRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

