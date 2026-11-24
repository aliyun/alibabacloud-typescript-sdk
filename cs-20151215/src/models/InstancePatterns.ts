// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstancePatterns extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** Use the cpu_architectures parameter instead. The architecture type of the instance type.
   * 
   * @deprecated
   */
  architectures?: string[];
  /**
   * @remarks
   * **[Deprecated]** Do not use this parameter. Specifies whether the instance type is a burstable instance type.
   * 
   * @example
   * Exclude
   * 
   * @deprecated
   */
  burstPerformanceOption?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the cores parameter instead. The number of vCPU cores of the instance type.
   * 
   * @example
   * 4
   * 
   * @deprecated
   */
  core?: number;
  /**
   * @remarks
   * The number of vCPU cores of the instance type.
   * 
   * @example
   * 4
   */
  cores?: number;
  /**
   * @remarks
   * The CPU architecture of the instance.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The instance types to exclude.
   */
  excludedInstanceTypes?: string[];
  /**
   * @remarks
   * The instance categories.
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
   * The specified instance families.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The maximum number of vCPU cores of the instance type.
   * 
   * @example
   * 8
   */
  maxCpuCores?: number;
  /**
   * @remarks
   * The maximum memory of the instance type. Unit: GiB.
   * 
   * @example
   * 16
   */
  maxMemorySize?: number;
  /**
   * @remarks
   * **[Deprecated]** Do not use this parameter. The maximum hourly price of the instance.
   * 
   * @example
   * 2
   * 
   * @deprecated
   */
  maxPrice?: number;
  /**
   * @remarks
   * The expected maximum number of GPUs.
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
   * The minimum number of vCPU cores of the instance type.
   * 
   * @example
   * 4
   */
  minCpuCores?: number;
  /**
   * @remarks
   * The minimum memory of the instance type. Unit: GiB.
   * 
   * @example
   * 8
   */
  minMemorySize?: number;
  /**
   * @remarks
   * The expected minimum number of IPv6 addresses per elastic network interface controller (NIC).
   * 
   * @example
   * 1
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The expected minimum number of IPv4 addresses per elastic network interface controller (NIC).
   * 
   * @example
   * 10
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The expected minimum number of elastic network interfaces (ENIs) that can be mounted.
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

