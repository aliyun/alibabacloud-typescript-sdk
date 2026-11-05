// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarClawSkillRequest extends $dara.Model {
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
   * The name of the skill.
   * 
   * This parameter is required.
   * 
   * @example
   * polarclawhub
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

