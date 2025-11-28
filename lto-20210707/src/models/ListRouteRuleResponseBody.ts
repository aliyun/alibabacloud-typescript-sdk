// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteRuleResponseBodyDataPageData extends $dara.Model {
  bizChainId?: number;
  bizChainName?: string;
  blockChainType?: string;
  chainUpMode?: string;
  contractName?: string;
  contractTemplateId?: string;
  deviceGroupId?: string;
  deviceGroupName?: string;
  invokeType?: string;
  privacyRuleId?: string;
  privacyRuleName?: string;
  remark?: string;
  routeRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      bizChainName: 'BizChainName',
      blockChainType: 'BlockChainType',
      chainUpMode: 'ChainUpMode',
      contractName: 'ContractName',
      contractTemplateId: 'ContractTemplateId',
      deviceGroupId: 'DeviceGroupId',
      deviceGroupName: 'DeviceGroupName',
      invokeType: 'InvokeType',
      privacyRuleId: 'PrivacyRuleId',
      privacyRuleName: 'PrivacyRuleName',
      remark: 'Remark',
      routeRuleId: 'RouteRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'number',
      bizChainName: 'string',
      blockChainType: 'string',
      chainUpMode: 'string',
      contractName: 'string',
      contractTemplateId: 'string',
      deviceGroupId: 'string',
      deviceGroupName: 'string',
      invokeType: 'string',
      privacyRuleId: 'string',
      privacyRuleName: 'string',
      remark: 'string',
      routeRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRuleResponseBodyData extends $dara.Model {
  num?: number;
  pageData?: ListRouteRuleResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListRouteRuleResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteRuleResponseBody extends $dara.Model {
  code?: string;
  data?: ListRouteRuleResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListRouteRuleResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

