// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails extends $dara.Model {
  eipList?: string[];
  functionVersion?: string;
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
  domain?: string;
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
  requestId?: string;
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

