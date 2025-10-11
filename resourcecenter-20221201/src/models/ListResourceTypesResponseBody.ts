// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesResponseBodyResourceTypesCodeMapping extends $dara.Model {
  /**
   * @remarks
   * The resource group.
   * 
   * @example
   * cs.cluster
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * cs.cluster
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroup: 'ResourceGroup',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroup: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The code mapping of the resource type.
   */
  codeMapping?: ListResourceTypesResponseBodyResourceTypesCodeMapping;
  /**
   * @remarks
   * The supported filter conditions.
   */
  filterKeys?: string[];
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * @example
   * Container Service for Kubernetes
   */
  productName?: string;
  /**
   * @remarks
   * The name of supported related resource types.
   */
  relatedResourceTypes?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ACK::Cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the resource type.
   * 
   * @example
   * Cluster
   */
  resourceTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      codeMapping: 'CodeMapping',
      filterKeys: 'FilterKeys',
      productName: 'ProductName',
      relatedResourceTypes: 'RelatedResourceTypes',
      resourceType: 'ResourceType',
      resourceTypeName: 'ResourceTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeMapping: ListResourceTypesResponseBodyResourceTypesCodeMapping,
      filterKeys: { 'type': 'array', 'itemType': 'string' },
      productName: 'string',
      relatedResourceTypes: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      resourceTypeName: 'string',
    };
  }

  validate() {
    if(this.codeMapping && typeof (this.codeMapping as any).validate === 'function') {
      (this.codeMapping as any).validate();
    }
    if(Array.isArray(this.filterKeys)) {
      $dara.Model.validateArray(this.filterKeys);
    }
    if(Array.isArray(this.relatedResourceTypes)) {
      $dara.Model.validateArray(this.relatedResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5556E4C-479A-5BBB-B325-F07563E7E917
   */
  requestId?: string;
  /**
   * @remarks
   * The resource types.
   */
  resourceTypes?: ListResourceTypesResponseBodyResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': ListResourceTypesResponseBodyResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

