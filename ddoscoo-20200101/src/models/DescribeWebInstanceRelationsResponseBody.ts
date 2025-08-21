// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of the instance.
   */
  eipList?: string[];
  /**
   * @remarks
   * The function plan of the instance. Valid values:
   * 
   * *   **default**: Standard function plan
   * *   **enhance**: Enhanced function plan
   * 
   * @example
   * enhance
   */
  functionVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-0pp163pd****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      eipList: 'EipList',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipList: { 'type': 'array', 'itemType': 'string' },
      functionVersion: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipList)) {
      $dara.Model.validateArray(this.eipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceRelationsResponseBodyWebInstanceRelations extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The information about the instance to which a website service is added.
   */
  instanceDetails?: DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceDetails: 'InstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceDetails: { 'type': 'array', 'itemType': DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.instanceDetails)) {
      $dara.Model.validateArray(this.instanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0222382B-5FE5-4FF7-BC9B-97EE31D58818
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the instances to which a website service is added.
   */
  webInstanceRelations?: DescribeWebInstanceRelationsResponseBodyWebInstanceRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webInstanceRelations: 'WebInstanceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webInstanceRelations: { 'type': 'array', 'itemType': DescribeWebInstanceRelationsResponseBodyWebInstanceRelations },
    };
  }

  validate() {
    if(Array.isArray(this.webInstanceRelations)) {
      $dara.Model.validateArray(this.webInstanceRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

