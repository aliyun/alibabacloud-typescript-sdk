// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTeamInput extends $dara.Model {
  /**
   * @remarks
   * The new description of the team.
   * 
   * @example
   * Production sandbox environment for the algorithm team
   */
  description?: string;
  /**
   * @remarks
   * The new plan specification of the team. Valid values: eco (economy), std (standard), pro (professional), ent (enterprise).
   * 
   * @example
   * pro
   */
  plan?: string;
  /**
   * @remarks
   * The ID of the new Alibaba Cloud resource group to which the team belongs.
   * 
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The new name of the team. The name can be modified only when allowUpdateTeamName of the team is set to true.
   * 
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

