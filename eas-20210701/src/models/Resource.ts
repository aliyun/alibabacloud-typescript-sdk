// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resource extends $dara.Model {
  clusterId?: string;
  cpuCount?: number;
  createTime?: string;
  extraData?: { [key: string]: any };
  gpuCount?: number;
  instanceCount?: number;
  message?: string;
  postPaidInstanceCount?: number;
  prePaidInstanceCount?: number;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  status?: string;
  updateTime?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpuCount: 'CpuCount',
      createTime: 'CreateTime',
      extraData: 'ExtraData',
      gpuCount: 'GpuCount',
      instanceCount: 'InstanceCount',
      message: 'Message',
      postPaidInstanceCount: 'PostPaidInstanceCount',
      prePaidInstanceCount: 'PrePaidInstanceCount',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      status: 'Status',
      updateTime: 'UpdateTime',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpuCount: 'number',
      createTime: 'string',
      extraData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuCount: 'number',
      instanceCount: 'number',
      message: 'string',
      postPaidInstanceCount: 'number',
      prePaidInstanceCount: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
      updateTime: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.extraData) {
      $dara.Model.validateMap(this.extraData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

