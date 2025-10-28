// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertOrUpdateRegionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable remote debugging. Valid values:
   * 
   * *   true: enables remote debugging.
   * *   false: disables remote debugging.
   * 
   * @example
   * true
   */
  debugEnable?: boolean;
  /**
   * @remarks
   * The description of the namespace. The description can be up to 128 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to create or modify the namespace. If this parameter is left empty or is set to 0, the namespace is created. Otherwise, the namespace is modified.
   * 
   * @example
   * 0
   */
  id?: number;
  /**
   * @remarks
   * The ID of the MSE registry.
   * 
   * @example
   * mse_prepaid_public_cn-tl32n******
   */
  mseInstanceId?: string;
  /**
   * @remarks
   * The name of the namespace. The name can be up to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_region
   */
  regionName?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * *   The ID of a custom namespace is in the `Region ID:Namespace identifier` format. Example: cn-beijing:tdy218.
   * *   The ID of the default namespace is in the `region ID` format. Example: cn-beijing.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  regionTag?: string;
  /**
   * @remarks
   * The type of the registry.
   * 
   * *   default: the shared registry of Enterprise Distributed Application Service (EDAS)
   * *   exclusive_mse: a Microservices Engine (MSE) registry
   * 
   * @example
   * default
   */
  registryType?: string;
  static names(): { [key: string]: string } {
    return {
      debugEnable: 'DebugEnable',
      description: 'Description',
      id: 'Id',
      mseInstanceId: 'MseInstanceId',
      regionName: 'RegionName',
      regionTag: 'RegionTag',
      registryType: 'RegistryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugEnable: 'boolean',
      description: 'string',
      id: 'number',
      mseInstanceId: 'string',
      regionName: 'string',
      regionTag: 'string',
      registryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

