// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrgEmissionModuleEmissionList } from "./OrgEmissionModuleEmissionList";


export class OrgEmission extends $dara.Model {
  carbonEmissionData?: number;
  moduleEmissionList?: OrgEmissionModuleEmissionList[];
  name?: string;
  nameKey?: string;
  ratio?: number;
  subEmissionItems?: OrgEmission[];
  weightingCarbonEmissionData?: number;
  weightingProportion?: number;
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

