// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawSkillTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. This parameter is required when you call this operation. If this parameter is not specified, InvalidApplicationId.Malformed is returned.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type.
   * 
   * > If you are calling this operation for the first time, you do not need to specify this parameter.
   * 
   * @example
   * polardb_polarclaw
   */
  applicationType?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The skill template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pcpg-skill-**************
   */
  skillTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      regionId: 'RegionId',
      skillTemplateId: 'SkillTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      regionId: 'string',
      skillTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

