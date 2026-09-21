// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTeamInput extends $dara.Model {
  /**
   * @example
   * 算法团队的生产沙箱环境
   */
  description?: string;
  /**
   * @example
   * pro
   */
  plan?: string;
  /**
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @example
   * sandbox-prod
   */
  teamName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      plan: 'plan',
      resourceGroupID: 'resourceGroupID',
      teamName: 'teamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      plan: 'string',
      resourceGroupID: 'string',
      teamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

