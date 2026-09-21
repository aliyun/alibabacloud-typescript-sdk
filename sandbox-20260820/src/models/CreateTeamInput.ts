// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamInput extends $dara.Model {
  /**
   * @example
   * 算法团队的沙箱环境
   */
  description?: string;
  /**
   * @example
   * std
   */
  plan?: string;
  /**
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @example
   * sandbox-dev
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

