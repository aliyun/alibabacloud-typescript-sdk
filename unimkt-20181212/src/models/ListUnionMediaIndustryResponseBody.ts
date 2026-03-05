// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListUnionMediaIndustryResponseBodyData extends $dara.Model {
  industryCode?: string;
  industryName?: string;
  level?: string;
  parentIndustryCode?: string;
  usedFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      industryCode: 'IndustryCode',
      industryName: 'IndustryName',
      level: 'Level',
      parentIndustryCode: 'ParentIndustryCode',
      usedFlag: 'UsedFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industryCode: 'string',
      industryName: 'string',
      level: 'string',
      parentIndustryCode: 'string',
      usedFlag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnionMediaIndustryResponseBody extends $dara.Model {
  code?: number;
  data?: ListUnionMediaIndustryResponseBodyData[];
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListUnionMediaIndustryResponseBodyData },
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
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

