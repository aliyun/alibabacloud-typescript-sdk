// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertCollectionPolicyRequestPolicyConfig extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances. This parameter takes effect only when resourceMode is set to instanceMode. Logs are collected only from instances that use the specified IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The regions of the instances. This parameter takes effect only when resourceMode is set to attributeMode. Wildcard characters are supported. If you leave this parameter empty, region-based filtering is not performed. The system considers that all instances are matched. If you specify a value for this parameter, logs of instances that reside in the specified regions are collected. Logs are collected from an instance only if the resource tags and region of the instance match the specified conditions.
   */
  regions?: string[];
  /**
   * @remarks
   * The resource collection mode. Valid values: all, attributeMode, and instanceMode. The value all specifies that logs of all instances within your account are collected to the default logstore. The value attributeMode specifies that logs are collected based on the regions of instances and resource tags. The value instanceMode specifies that logs are collected based on instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  resourceMode?: string;
  /**
   * @remarks
   * The resource tags. This parameter takes effect only when resourceMode is set to attributeMode. If you leave this parameter empty, resource tag-based filtering is not performed. The system considers that all instances are matched. If you specify a value for this parameter, logs of instances that use the specified resource tags are collected. Logs are collected from an instance only if the resource tags and region of the instance match the specified conditions.
   * 
   * @example
   * {"tag1":"value1",“tag2":"value2"}
   */
  resourceTags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      regions: 'regions',
      resourceMode: 'resourceMode',
      resourceTags: 'resourceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regions: { 'type': 'array', 'itemType': 'string' },
      resourceMode: 'string',
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    if(this.resourceTags) {
      $dara.Model.validateMap(this.resourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

