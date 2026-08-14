// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceExtResponseBodyInstanceExtSpecs extends $dara.Model {
  functionVersion?: number;
  instanceId?: string;
  normalBandwidth?: number;
  productPlan?: number;
  servicePartner?: string;
  static names(): { [key: string]: string } {
    return {
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      normalBandwidth: 'NormalBandwidth',
      productPlan: 'ProductPlan',
      servicePartner: 'ServicePartner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionVersion: 'number',
      instanceId: 'string',
      normalBandwidth: 'number',
      productPlan: 'number',
      servicePartner: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceExtResponseBody extends $dara.Model {
  instanceExtSpecs?: DescribeInstanceExtResponseBodyInstanceExtSpecs[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceExtSpecs: 'InstanceExtSpecs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceExtSpecs: { 'type': 'array', 'itemType': DescribeInstanceExtResponseBodyInstanceExtSpecs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceExtSpecs)) {
      $dara.Model.validateArray(this.instanceExtSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

