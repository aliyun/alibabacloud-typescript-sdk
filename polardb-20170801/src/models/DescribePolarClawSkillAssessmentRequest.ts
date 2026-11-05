// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawSkillAssessmentRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query all available regions for the current account, including region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * polarclawhub
   */
  skillName?: string;
  /**
   * @remarks
   * The version of the skill.
   * 
   * @example
   * 1.0.0
   */
  skillVersion?: string;
  /**
   * @remarks
   * The source of the skill. Valid values: PUBLIC, SELF, and OTHER.
   * 
   * @example
   * PUBLIC
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      regionId: 'RegionId',
      skillName: 'SkillName',
      skillVersion: 'SkillVersion',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      regionId: 'string',
      skillName: 'string',
      skillVersion: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

