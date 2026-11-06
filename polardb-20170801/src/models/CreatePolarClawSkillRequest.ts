// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawSkillRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  bucketRegionId?: string;
  /**
   * @example
   * UserOwned
   */
  bucketType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss-bucket-test
   */
  OSSBucket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * steelStorage
   */
  OSSPrefix?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polarclawhub
   */
  skillName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  skillVersion?: string;
  /**
   * @example
   * 用于管理 PolarDB 技能的示例。
   */
  summary?: string;
  /**
   * @example
   * [\\"PolarDB\\"]
   */
  tags?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PolarClawHub
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bucketRegionId: 'BucketRegionId',
      bucketType: 'BucketType',
      OSSBucket: 'OSSBucket',
      OSSPrefix: 'OSSPrefix',
      regionId: 'RegionId',
      skillName: 'SkillName',
      skillVersion: 'SkillVersion',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketRegionId: 'string',
      bucketType: 'string',
      OSSBucket: 'string',
      OSSPrefix: 'string',
      regionId: 'string',
      skillName: 'string',
      skillVersion: 'string',
      summary: 'string',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

