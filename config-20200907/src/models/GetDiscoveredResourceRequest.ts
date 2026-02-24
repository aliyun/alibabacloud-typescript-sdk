// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiscoveredResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the compliance results of the resource. Valid values:
   * 
   * - 0 (default): The compliance results are not queried.
   * 
   * - 1: The compliance results are queried.
   * 
   * @example
   * 0
   */
  complianceOption?: number;
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * For more information about how to obtain the region ID of the resource, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/411702.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * For more information about how to obtain the resource ID, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/411702.html).
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp12g4xbl4i0brkn****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about how to obtain the resource type, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/411702.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      complianceOption: 'ComplianceOption',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceOption: 'number',
      region: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

