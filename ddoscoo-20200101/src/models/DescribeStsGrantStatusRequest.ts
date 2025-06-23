// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStsGrantStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management.
   * 
   * If you do not configure this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the RAM role to query. Set the value to **AliyunDDoSCOODefaultRole**, which indicates the default role of Anti-DDoS Pro or Anti-DDoS Premium.
   * 
   * > Anti-DDoS Pro or Anti-DDoS Premium uses the default role to access other cloud services.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunDDoSCOODefaultRole
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

