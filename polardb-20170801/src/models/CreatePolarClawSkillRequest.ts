// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the OSS bucket where the skill files are stored.
   * 
   * @example
   * cn-hangzhou
   */
  bucketRegionId?: string;
  /**
   * @remarks
   * The type of the bucket used for skill files. Valid values: UserOwned: a user-owned bucket. Hosted: a managed bucket. You must have the required permissions to use a managed bucket.
   * 
   * @example
   * UserOwned
   */
  bucketType?: string;
  /**
   * @remarks
   * The name of the OSS bucket that is in the same region as the current project.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-bucket-test
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The prefix of your OSS object. The prefix can contain digits and letters and must be 1 to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * steelStorage
   */
  OSSPrefix?: string;
  /**
   * @remarks
   * The region ID of the region where the parameter template resides.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * This parameter is required.
   * 
   * @example
   * polarclawhub
   */
  skillName?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  skillVersion?: string;
  /**
   * @remarks
   * The brief description of the skill.
   * 
   * @example
   * Example for managing PolarDB skills
   */
  summary?: string;
  /**
   * @remarks
   * The tag details.
   * 
   * @example
   * [\"PolarDB\"]
   */
  tags?: string;
  /**
   * @remarks
   * The title.
   * 
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

