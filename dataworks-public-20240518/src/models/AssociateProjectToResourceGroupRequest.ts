// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateProjectToResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace with which you want to associate the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
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

