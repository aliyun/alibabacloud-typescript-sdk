// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationResponseBodyDataComplianceListRules } from "./GetApplicationResponseBodyDataComplianceListRules";


export class GetApplicationResponseBodyDataComplianceList extends $dara.Model {
  resourceCode?: string;
  resourceName?: string;
  rules?: GetApplicationResponseBodyDataComplianceListRules[];
  static names(): { [key: string]: string } {
    return {
      resourceCode: 'ResourceCode',
      resourceName: 'ResourceName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCode: 'string',
      resourceName: 'string',
      rules: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataComplianceListRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

