// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
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

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags. This parameter takes effect only when the TagKey.N parameter is not specified. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * False
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs. You can specify a maximum of 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the ARMS resources for which you want to modify tags. Valid values:
   * 
   * *   WEB: Browser Monitoring
   * *   APPLICATION: Application Monitoring
   * *   PROMETHEUS: Managed Service for Prometheus
   * *   SYNTHETICTASK: Synthetic Monitoring
   * *   ALERTRULE: Application Monitoring alert rule
   * *   PROMETHEUSALERTRULE: Managed Service for Prometheus alert rule
   * *   XTRACEAPP: Managed Service for OpenTelemetry
   * 
   * This parameter is required.
   * 
   * @example
   * PROMETHEUS
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. You can specify a maximum of 20 tag keys.
   */
  tagKey?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: UntagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': UntagResourcesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

