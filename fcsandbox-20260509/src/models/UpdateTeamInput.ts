// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTeamInput extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 开发团队
   */
  description?: string;
  plan?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * dev
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

