// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceTypesResponseBodyResourceTypesCodeMapping } from "./ListResourceTypesResponseBodyResourceTypesCodeMapping";


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

