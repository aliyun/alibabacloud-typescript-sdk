// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawSkillDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The Skill identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * alibacloud-rds-copilot
   */
  slug?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      slug: 'Slug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      slug: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

