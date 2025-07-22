// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSavingPlanUserDeductRuleResponseBodyData extends $dara.Model {
  commodityCode?: string;
  commodityName?: string;
  moduleCode?: string;
  moduleName?: string;
  skipDeduct?: boolean;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      skipDeduct: 'SkipDeduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityName: 'string',
      moduleCode: 'string',
      moduleName: 'string',
      skipDeduct: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanUserDeductRuleResponseBody extends $dara.Model {
  data?: GetSavingPlanUserDeductRuleResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetSavingPlanUserDeductRuleResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

