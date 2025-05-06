// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesClusterUsedResources extends $dara.Model {
  clusterId?: string;
  elasticUsedCpu?: number;
  elasticUsedMemory?: number;
  elasticUsedResource?: number;
  guaranteedUsedCpu?: number;
  guaranteedUsedMemory?: number;
  guaranteedUsedResource?: number;
  ha?: boolean;
  haUsedCpu?: number;
  haUsedMemory?: number;
  haUsedResource?: number;
  usedCpu?: number;
  usedMemory?: number;
  usedResource?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      elasticUsedCpu: 'ElasticUsedCpu',
      elasticUsedMemory: 'ElasticUsedMemory',
      elasticUsedResource: 'ElasticUsedResource',
      guaranteedUsedCpu: 'GuaranteedUsedCpu',
      guaranteedUsedMemory: 'GuaranteedUsedMemory',
      guaranteedUsedResource: 'GuaranteedUsedResource',
      ha: 'Ha',
      haUsedCpu: 'HaUsedCpu',
      haUsedMemory: 'HaUsedMemory',
      haUsedResource: 'HaUsedResource',
      usedCpu: 'UsedCpu',
      usedMemory: 'UsedMemory',
      usedResource: 'UsedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      elasticUsedCpu: 'number',
      elasticUsedMemory: 'number',
      elasticUsedResource: 'number',
      guaranteedUsedCpu: 'number',
      guaranteedUsedMemory: 'number',
      guaranteedUsedResource: 'number',
      ha: 'boolean',
      haUsedCpu: 'number',
      haUsedMemory: 'number',
      haUsedResource: 'number',
      usedCpu: 'number',
      usedMemory: 'number',
      usedResource: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

