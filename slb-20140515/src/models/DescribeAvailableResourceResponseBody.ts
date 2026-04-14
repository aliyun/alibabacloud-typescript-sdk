// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResourcesSupportResource extends $dara.Model {
  addressIPVersion?: string;
  addressType?: string;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      addressType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources extends $dara.Model {
  supportResource?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResourcesSupportResource },
    };
  }

  validate() {
    if(Array.isArray(this.supportResource)) {
      $dara.Model.validateArray(this.supportResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResource extends $dara.Model {
  masterZoneId?: string;
  slaveZoneId?: string;
  supportResources?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources;
  static names(): { [key: string]: string } {
    return {
      masterZoneId: 'MasterZoneId',
      slaveZoneId: 'SlaveZoneId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterZoneId: 'string',
      slaveZoneId: 'string',
      supportResources: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResourceSupportResources,
    };
  }

  validate() {
    if(this.supportResources && typeof (this.supportResources as any).validate === 'function') {
      (this.supportResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableResources extends $dara.Model {
  availableResource?: DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableResourcesAvailableResource },
    };
  }

  validate() {
    if(Array.isArray(this.availableResource)) {
      $dara.Model.validateArray(this.availableResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $dara.Model {
  availableResources?: DescribeAvailableResourceResponseBodyAvailableResources;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 173B0EEA-22ED-4EE2-91F9-3A1CDDFFBBBA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeAvailableResourceResponseBodyAvailableResources,
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableResources && typeof (this.availableResources as any).validate === 'function') {
      (this.availableResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

