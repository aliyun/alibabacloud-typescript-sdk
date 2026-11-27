// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Limits:
   * 
   * - Cannot be empty or an empty string. 
   * - Maximum length: 128 characters.
   * - Cannot start with `aliyun` or `acs:`.
   * - Cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * nastest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Limits:
   * 
   * - Maximum length: 128 characters.
   * - Cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * filetest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The resource ID. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 03e08484f0
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * - filesystem: File system.
   * - accesspoint: Access point.
   * 
   * This parameter is required.
   * 
   * @example
   * filesystem
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag array. Length: 1 to 20. If the array contains multiple tag objects, tag keys must be unique.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

