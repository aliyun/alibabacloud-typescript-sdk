// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckPolarClawSkillRequest extends $dara.Model {
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
   * The type of the bucket used for skill files. UserOwned indicates a user-owned bucket. Hosted indicates a hosted bucket. You must have the required permissions to use a hosted bucket.
   * 
   * @example
   * UserOwned
   */
  bucketType?: string;
  /**
   * @remarks
   * The name of the OSS bucket to be unbound.
   * 
   * @example
   * oss-bucket-test
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the skill.
   * 
   * This parameter is required.
   * 
   * @example
   * polarclawhub
   */
  skillName?: string;
  /**
   * @remarks
   * The version number of the skill.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0
   */
  skillVersion?: string;
  /**
   * @remarks
   * The brief description of the skill.
   * 
   * @example
   * An example for managing PolarDB skills
   */
  summary?: string;
  /**
   * @remarks
   * The tag details.
   * 
   * @example
   * [\\"PolarDB\\",\\"programming\\"]
   */
  tags?: string;
  /**
   * @remarks
   * The title.
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

