// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelationsInstanceDetails extends $dara.Model {
  eipList?: string[];
  /**
   * @example
   * default
   */
  functionVersion?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  ipMode?: string;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      eipList: 'EipList',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipList: { 'type': 'array', 'itemType': 'string' },
      functionVersion: 'string',
      instanceId: 'string',
      ipMode: 'string',
      ipVersion: 'string',
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

export class DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelations extends $dara.Model {
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  instanceDetails?: DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelationsInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceDetails: 'InstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceDetails: { 'type': 'array', 'itemType': DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelationsInstanceDetails },
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

export class DescribleLayer7InstanceRelationsResponseBody extends $dara.Model {
  layer7InstanceRelations?: DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelations[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layer7InstanceRelations: 'Layer7InstanceRelations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layer7InstanceRelations: { 'type': 'array', 'itemType': DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layer7InstanceRelations)) {
      $dara.Model.validateArray(this.layer7InstanceRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

