// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAclEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The public network access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * allow
   */
  policy?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of instance IDs for public network access control, which are office network IDs or cloud computer IDs.
   * 
   * This parameter is required.
   */
  sourceId?: string[];
  /**
   * @remarks
   * The granularity of the public network access control policy.
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

