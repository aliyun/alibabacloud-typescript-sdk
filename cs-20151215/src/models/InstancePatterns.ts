// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstancePatterns extends $dara.Model {
  /**
   * @deprecated
   */
  architectures?: string[];
  /**
   * @example
   * Exclude
   * 
   * @deprecated
   */
  burstPerformanceOption?: string;
  /**
   * @example
   * 4
   * 
   * @deprecated
   */
  core?: number;
  /**
   * @example
   * 4
   */
  cores?: number;
  cpuArchitectures?: string[];
  excludedInstanceTypes?: string[];
  instanceCategories?: string[];
  /**
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  instanceTypeFamilies?: string[];
  /**
   * @example
   * 8
   */
  maxCpuCores?: number;
  /**
   * @example
   * 16
   */
  maxMemorySize?: number;
  /**
   * @example
   * 2
   * 
   * @deprecated
   */
  maxPrice?: number;
  maximumGpuAmount?: number;
  /**
   * @example
   * 8
   */
  memory?: number;
  /**
   * @example
   * 4
   */
  minCpuCores?: number;
  /**
   * @example
   * 8
   */
  minMemorySize?: number;
  minimumEniIpv6AddressQuantity?: number;
  minimumEniPrivateIpAddressQuantity?: number;
  minimumEniQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      architectures: 'architectures',
      burstPerformanceOption: 'burst_performance_option',
      core: 'core',
      cores: 'cores',
      cpuArchitectures: 'cpu_architectures',
      excludedInstanceTypes: 'excluded_instance_types',
      instanceCategories: 'instance_categories',
      instanceFamilyLevel: 'instance_family_level',
      instanceTypeFamilies: 'instance_type_families',
      maxCpuCores: 'max_cpu_cores',
      maxMemorySize: 'max_memory_size',
      maxPrice: 'max_price',
      maximumGpuAmount: 'maximum_gpu_amount',
      memory: 'memory',
      minCpuCores: 'min_cpu_cores',
      minMemorySize: 'min_memory_size',
      minimumEniIpv6AddressQuantity: 'minimum_eni_ipv6_address_quantity',
      minimumEniPrivateIpAddressQuantity: 'minimum_eni_private_ip_address_quantity',
      minimumEniQuantity: 'minimum_eni_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstPerformanceOption: 'string',
      core: 'number',
      cores: 'number',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      maxCpuCores: 'number',
      maxMemorySize: 'number',
      maxPrice: 'number',
      maximumGpuAmount: 'number',
      memory: 'number',
      minCpuCores: 'number',
      minMemorySize: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.architectures)) {
      $dara.Model.validateArray(this.architectures);
    }
    if(Array.isArray(this.cpuArchitectures)) {
      $dara.Model.validateArray(this.cpuArchitectures);
    }
    if(Array.isArray(this.excludedInstanceTypes)) {
      $dara.Model.validateArray(this.excludedInstanceTypes);
    }
    if(Array.isArray(this.instanceCategories)) {
      $dara.Model.validateArray(this.instanceCategories);
    }
    if(Array.isArray(this.instanceTypeFamilies)) {
      $dara.Model.validateArray(this.instanceTypeFamilies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

