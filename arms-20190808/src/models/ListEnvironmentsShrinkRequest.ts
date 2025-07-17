// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The add-on name. You must specify at least one of the AddonName and EnvironmentType parameters.
   * 
   * @example
   * trace-java
   */
  addonName?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * cff30f0d67d7542dfb05bd114b4b1d7af
   */
  bindResourceId?: string;
  /**
   * @remarks
   * The environment type. You must specify at least one of the AddonName and EnvironmentType parameters.
   * 
   * Valid values:
   * 
   * *   CS
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Container Service for Kubernetes (ACK)
   * 
   *     <!-- -->
   * 
   * *   ECS
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Elastic Compute Service (ECS)
   * 
   *     <!-- -->
   * 
   * *   Cloud
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     cloud service
   * 
   *     <!-- -->
   * 
   * @example
   * CS
   */
  environmentType?: string;
  /**
   * @remarks
   * The payable resource plan.
   * 
   * *   If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
   * *   Otherwise, leave the parameter empty.
   * 
   * Valid values:
   * 
   * *   CS_Pro: Container Monitoring Pro
   * *   CS_Basic: Container Monitoring Basic
   * 
   * @example
   * CS_Pro
   */
  feePackage?: string;
  /**
   * @remarks
   * The region IDs to be queried.
   * 
   * @example
   * cn-beijing,cn-hangzhou
   */
  filterRegionIds?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzfurdatohtka
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      bindResourceId: 'BindResourceId',
      environmentType: 'EnvironmentType',
      feePackage: 'FeePackage',
      filterRegionIds: 'FilterRegionIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      bindResourceId: 'string',
      environmentType: 'string',
      feePackage: 'string',
      filterRegionIds: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

