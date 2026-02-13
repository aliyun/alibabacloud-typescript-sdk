// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrgEmissionModuleEmissionList extends $dara.Model {
  /**
   * @remarks
   * Carbon emissions
   * 
   * @example
   * 1.2
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * module name
   * 
   * @example
   * Scope 1: Direct GHG emissions
   */
  name?: string;
  /**
   * @remarks
   * Module key
   * 
   * @example
   * carbonInventory.check.scope_1_direct_ghg_emissions
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of carbon emissions
   * 
   * @example
   * 0.2
   */
  ratio?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrgEmission extends $dara.Model {
  /**
   * @remarks
   * Carbon Equivalent
   * 
   * @example
   * 1.2
   */
  carbonEmissionData?: number;
  /**
   * @remarks
   * Sub-module carbon emission data
   */
  moduleEmissionList?: OrgEmissionModuleEmissionList[];
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * EnterpriseZ
   */
  name?: string;
  /**
   * @remarks
   * Enterprise type
   * 
   * @example
   * Z-20240115-4
   */
  nameKey?: string;
  /**
   * @remarks
   * Proportion of carbon emissions
   * 
   * @example
   * 0.2
   */
  ratio?: number;
  /**
   * @remarks
   * Sub-level data, that is, site data under the organization
   */
  subEmissionItems?: OrgEmission[];
  /**
   * @remarks
   * Calculate carbon emissions by share ratio
   * 
   * @example
   * 2.3
   */
  weightingCarbonEmissionData?: number;
  /**
   * @remarks
   * Weight ratio
   * 
   * @example
   * 0.3
   */
  weightingProportion?: number;
  /**
   * @remarks
   * Share ratio Carbon emissions YoY
   * 
   * @example
   * 0.4
   */
  weightingRatio?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      moduleEmissionList: 'moduleEmissionList',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      subEmissionItems: 'subEmissionItems',
      weightingCarbonEmissionData: 'weightingCarbonEmissionData',
      weightingProportion: 'weightingProportion',
      weightingRatio: 'weightingRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      moduleEmissionList: { 'type': 'array', 'itemType': OrgEmissionModuleEmissionList },
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      subEmissionItems: { 'type': 'array', 'itemType': OrgEmission },
      weightingCarbonEmissionData: 'number',
      weightingProportion: 'number',
      weightingRatio: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.moduleEmissionList)) {
      $dara.Model.validateArray(this.moduleEmissionList);
    }
    if(Array.isArray(this.subEmissionItems)) {
      $dara.Model.validateArray(this.subEmissionItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

