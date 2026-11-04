// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamInput extends $dara.Model {
  /**
   * @remarks
   * The description of the team.
   * 
   * @example
   * Sandbox environment for the algorithm team
   */
  description?: string;
  /**
   * @remarks
   * The plan specification of the team. Valid values: eco (economy), std (standard), pro (professional), ent (enterprise).
   * 
   * @example
   * std
   */
  plan?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group to which the team belongs. If this parameter is not specified, the default resource group of the account is used.
   * 
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The name of the team.
   * 
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

