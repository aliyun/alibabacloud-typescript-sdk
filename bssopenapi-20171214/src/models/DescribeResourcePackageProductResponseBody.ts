// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypePropertiesProperty extends $dara.Model {
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * region
   */
  name?: string;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * cn-shenzhen
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties extends $dara.Model {
  property?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypePropertiesProperty[];
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypePropertiesProperty },
    };
  }

  validate() {
    if(Array.isArray(this.property)) {
      $dara.Model.validateArray(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurationsAvailableDuration extends $dara.Model {
  /**
   * @remarks
   * The name of the validity period.
   * 
   * @example
   * 6 Month
   */
  name?: string;
  /**
   * @remarks
   * The unit of the validity period for the resource plan. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  unit?: string;
  /**
   * @remarks
   * The value of the validity period.
   * 
   * @example
   * 6
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations extends $dara.Model {
  availableDuration?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurationsAvailableDuration[];
  static names(): { [key: string]: string } {
    return {
      availableDuration: 'AvailableDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDuration: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurationsAvailableDuration },
    };
  }

  validate() {
    if(Array.isArray(this.availableDuration)) {
      $dara.Model.validateArray(this.availableDuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecification extends $dara.Model {
  /**
   * @remarks
   * The validity periods available for the resource plan.
   */
  availableDurations?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations;
  /**
   * @remarks
   * The name of the specification.
   * 
   * @example
   * 1TB
   */
  name?: string;
  /**
   * @remarks
   * The value of the specification.
   * 
   * @example
   * 1024
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      availableDurations: 'AvailableDurations',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDurations: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations,
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.availableDurations && typeof (this.availableDurations as any).validate === 'function') {
      (this.availableDurations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications extends $dara.Model {
  specification?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecification[];
  static names(): { [key: string]: string } {
    return {
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specification: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecification },
    };
  }

  validate() {
    if(Array.isArray(this.specification)) {
      $dara.Model.validateArray(this.specification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageType extends $dara.Model {
  /**
   * @remarks
   * The code of the resource plan.
   * 
   * @example
   * FPT_ossbag_deadlineAcc_CdnOut_common_sz
   */
  code?: string;
  /**
   * @remarks
   * The name of the resource plan type.
   * 
   * @example
   * Back-to-origin traffic plan - China (Shenzhen)
   */
  name?: string;
  /**
   * @remarks
   * The properties of the resource plan.
   */
  properties?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties;
  /**
   * @remarks
   * The specifications of the resource plan.
   */
  specifications?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      properties: 'Properties',
      specifications: 'Specifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      properties: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties,
      specifications: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications,
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.specifications && typeof (this.specifications as any).validate === 'function') {
      (this.specifications as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes extends $dara.Model {
  packageType?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageType[];
  static names(): { [key: string]: string } {
    return {
      packageType: 'PackageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageType: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageType },
    };
  }

  validate() {
    if(Array.isArray(this.packageType)) {
      $dara.Model.validateArray(this.packageType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackage extends $dara.Model {
  /**
   * @remarks
   * The name of the resource plan.
   * 
   * @example
   * Object Storage Service (OSS) resource plan (monthly)
   */
  name?: string;
  /**
   * @remarks
   * The types of the resource plans.
   */
  packageTypes?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * ossbag
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * ossbag
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      packageTypes: 'PackageTypes',
      productCode: 'ProductCode',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      packageTypes: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes,
      productCode: 'string',
      productType: 'string',
    };
  }

  validate() {
    if(this.packageTypes && typeof (this.packageTypes as any).validate === 'function') {
      (this.packageTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackages extends $dara.Model {
  resourcePackage?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackage[];
  static names(): { [key: string]: string } {
    return {
      resourcePackage: 'ResourcePackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackage: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackage },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePackage)) {
      $dara.Model.validateArray(this.resourcePackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details about the resource plans.
   */
  resourcePackages?: DescribeResourcePackageProductResponseBodyDataResourcePackages;
  static names(): { [key: string]: string } {
    return {
      resourcePackages: 'ResourcePackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackages: DescribeResourcePackageProductResponseBodyDataResourcePackages,
    };
  }

  validate() {
    if(this.resourcePackages && typeof (this.resourcePackages as any).validate === 'function') {
      (this.resourcePackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeResourcePackageProductResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 72353765387
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBEF51A3-E933-4F40-A534-C673CBDB9C80
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeResourcePackageProductResponseBodyData,
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

