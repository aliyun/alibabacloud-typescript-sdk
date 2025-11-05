// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupAssociateProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the serverless resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

