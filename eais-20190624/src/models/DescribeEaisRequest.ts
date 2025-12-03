// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEaisRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisRequest extends $dara.Model {
  clientInstanceId?: string;
  /**
   * @example
   * ["eais-id1", "eais-id2"]
   */
  elasticAcceleratedInstanceIds?: string;
  /**
   * @example
   * eais*
   */
  instanceName?: string;
  /**
   * @example
   * eais.ei-a6.2xlarge
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * InUse
   */
  status?: string;
  tag?: DescribeEaisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceIds: 'ElasticAcceleratedInstanceIds',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceIds: 'string',
      instanceName: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeEaisRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

