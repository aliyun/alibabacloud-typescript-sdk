// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstancePatterns extends $dara.Model {
  /**
   * @remarks
   * [This parameter is deprecated and replaced by cpu_architectures] The architectures of instance types.
   * 
   * @deprecated
   */
  architectures?: string[];
  /**
   * @remarks
   * [This parameter is deprecated] Specifies whether to include burstable instance types.
   * 
   * @example
   * Exclude
   * 
   * @deprecated
   */
  burstPerformanceOption?: string;
  /**
   * @remarks
   * [This parameter is deprecated and replaced by cores] The number of vCores provided by the instance type.
   * 
   * @example
   * 4
   * 
   * @deprecated
   */
  core?: number;
  /**
   * @remarks
   * The number of vCPU cores for the instance type.
   * 
   * @example
   * 4
   */
  cores?: number;
  /**
   * @remarks
   * The CPU architecture of the instance type.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The instance type that you want to exclude.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The type of the instance.
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The instance family level.
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The specified instance family.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The maximum vCPU cores allowed for the instance type.
   * 
   * @example
   * 8
   */
  maxCpuCores?: number;
  /**
   * @remarks
   * The maximum allowed memory size. Unit: GiB.
   * 
   * @example
   * 16
   */
  maxMemorySize?: number;
  /**
   * @remarks
   * [This parameter is deprecated] The maximum hourly price of the instance.
   * 
   * @example
   * 2
   * 
   * @deprecated
   */
  maxPrice?: number;
  /**
   * @remarks
   * The maximum allowed number of GPUs per instance.
   * 
   * @example
   * 8
   */
  maximumGpuAmount?: number;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB.
   * 
   * @example
   * 8
   */
  memory?: number;
  /**
   * @remarks
   * The minimum vCPU cores required for the instance type.
   * 
   * @example
   * 4
   */
  minCpuCores?: number;
  /**
   * @remarks
   * The minimum required memory size. Unit: GiB.
   * 
   * @example
   * 8
   */
  minMemorySize?: number;
  /**
   * @remarks
   * The minimum required number of IPv6 addresses per ENI.
   * 
   * @example
   * 1
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum required number of IPv4 addresses per ENI.
   * 
   * @example
   * 10
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum required number of elastic network interfaces (ENIs) per instance.
   * 
   * @example
   * 3
   */
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

