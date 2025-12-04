// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormV2StreamEngineInfoResponseBodyResourceGroupList extends $dara.Model {
  jmIpList?: string[];
  quantity?: number;
  resourceGroupName?: string;
  sgIpList?: string[];
  spec?: string;
  specId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jmIpList: 'JmIpList',
      quantity: 'Quantity',
      resourceGroupName: 'ResourceGroupName',
      sgIpList: 'SgIpList',
      spec: 'Spec',
      specId: 'SpecId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jmIpList: { 'type': 'array', 'itemType': 'string' },
      quantity: 'number',
      resourceGroupName: 'string',
      sgIpList: { 'type': 'array', 'itemType': 'string' },
      spec: 'string',
      specId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jmIpList)) {
      $dara.Model.validateArray(this.jmIpList);
    }
    if(Array.isArray(this.sgIpList)) {
      $dara.Model.validateArray(this.sgIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormV2StreamEngineInfoResponseBody extends $dara.Model {
  instanceId?: string;
  requestId?: string;
  resourceGroupList?: GetLindormV2StreamEngineInfoResponseBodyResourceGroupList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      resourceGroupList: 'ResourceGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      resourceGroupList: { 'type': 'array', 'itemType': GetLindormV2StreamEngineInfoResponseBodyResourceGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupList)) {
      $dara.Model.validateArray(this.resourceGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

