// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTerraformPricingMappingsResponseBodyMappings extends $dara.Model {
  /**
   * @remarks
   * The list of pricing targets. Each item contains actions (create/update), popCode/popVersion/apiName, pricingUnit, params (parameter extraction rules: from=$after.xxx / const / default / expand), and when/whenChanged conditions.
   */
  pricingTargets?: { [key: string]: any }[];
  /**
   * @remarks
   * The Terraform resource type, such as alicloud_instance.
   * 
   * @example
   * alicloud_instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pricingTargets: 'pricingTargets',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pricingTargets: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pricingTargets)) {
      $dara.Model.validateArray(this.pricingTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTerraformPricingMappingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mapping content version, which is the timestamp of the most recent data change. Consumers can use this value for caching and auditing.
   * 
   * @example
   * 1786000000000
   */
  mappingVersion?: string;
  /**
   * @remarks
   * The list of matched mappings. Each item contains a resourceType and pricingTargets, which include pricing targets and parameter extraction rules. The rules reference Terraform plan resource properties by using $after/$before.
   */
  mappings?: GetTerraformPricingMappingsResponseBodyMappings[];
  /**
   * @remarks
   * The resource types in the request that do not have registered mappings. Consumers must treat these as unknown cost. Do not assume they are free.
   */
  missingResourceTypes?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AF0AD89-ED4F-5E9E-8B7B-9A3B27CE9E1B
   */
  requestId?: string;
  /**
   * @remarks
   * The schema version of the mapping catalog. The current version is 1.0. Consumers use this value to determine compatibility.
   * 
   * @example
   * 1.0
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The resource types that are confirmed to not support pricing, such as free resources or resources without a pricing interface. These are different from missing resource types.
   */
  unsupportedResourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      mappingVersion: 'mappingVersion',
      mappings: 'mappings',
      missingResourceTypes: 'missingResourceTypes',
      requestId: 'requestId',
      schemaVersion: 'schemaVersion',
      unsupportedResourceTypes: 'unsupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappingVersion: 'string',
      mappings: { 'type': 'array', 'itemType': GetTerraformPricingMappingsResponseBodyMappings },
      missingResourceTypes: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      schemaVersion: 'string',
      unsupportedResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.mappings)) {
      $dara.Model.validateArray(this.mappings);
    }
    if(Array.isArray(this.missingResourceTypes)) {
      $dara.Model.validateArray(this.missingResourceTypes);
    }
    if(Array.isArray(this.unsupportedResourceTypes)) {
      $dara.Model.validateArray(this.unsupportedResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

