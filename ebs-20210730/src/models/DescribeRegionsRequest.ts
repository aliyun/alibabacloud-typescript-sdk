// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for region and zone names. This parameter determines the value of `LocalName` in the response. Valid values:
   * 
   * - zh-CN: Chinese.
   * - en-US: English.
   * - ja: Japanese.
   * 
   * Default value: zh-CN.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The region ID of the user access endpoint.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - ear: asynchronous replication.
   * 
   * - lens: EBS Lens.
   * 
   * - dbsc: dedicated block storage cluster.
   * 
   * If you do not specify a resource type, region information for all resource types is returned.
   * 
   * @example
   * ear
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
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

