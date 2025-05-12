// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAclEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The Internet access control policy.
   * 
   * Valid values:
   * 
   * *   allow: allows access to the Internet.
   * 
   * *   disable: forbids access to the Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * allow
   */
  policy?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance IDs (office network IDs or cloud computer IDs) to which the Internet access control policy is applicable.
   * 
   * This parameter is required.
   */
  sourceId?: string[];
  /**
   * @remarks
   * The granularity to which the Internet access control policy is applicable.
   * 
   * Valid values:
   * 
   * *   desktop: cloud computer granularity.
   * 
   * *   vpc: office network granularity.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      regionId: 'RegionId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      regionId: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

