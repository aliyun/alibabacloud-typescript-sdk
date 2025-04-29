// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItemInstanceIdSet } from "./DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItemInstanceIdSet";


export class DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItem extends $dara.Model {
  instanceIdSet?: DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItemInstanceIdSet[];
  static names(): { [key: string]: string } {
    return {
      instanceIdSet: 'InstanceIdSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSet: { 'type': 'array', 'itemType': DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItemInstanceIdSet },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdSet)) {
      $dara.Model.validateArray(this.instanceIdSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

