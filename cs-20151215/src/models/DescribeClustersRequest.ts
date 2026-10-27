// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster name used for fuzzy matching.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group used to filter clusters.
   * 
   * @example
   * rg-a1b2c3d4e5f6g7h
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'clusterType',
      name: 'name',
      resourceGroupId: 'resource_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

