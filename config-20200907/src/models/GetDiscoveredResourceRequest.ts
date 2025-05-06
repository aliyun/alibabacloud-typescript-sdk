// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiscoveredResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the compliance results of the resource. Valid values:
   * 
   * *   0 (default): does not query the compliance results of the resource.
   * *   1: queries the compliance results of the resource.
   * 
   * @example
   * 0
   */
  complianceOption?: number;
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * For more information about how to query the region ID of a resource, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/411702.html).
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * For more information about how to obtain the ID of a resource, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/411702.html).
   * 
   * This parameter is required.
   * 
   * @example
   * new-bucket
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * For more information about how to obtain the type of a resource, see [ListDiscoveredResources](https://help.aliyun.com/document_detail/411702.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::OSS::Bucket
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

