// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataBusinessesValueSdkCodesIntegrate extends $dara.Model {
  platform?: string;
  code?: string;
  pkg?: string;
  size?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      code: 'Code',
      pkg: 'Pkg',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      code: 'string',
      pkg: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataBusinessesValueSdkCodes extends $dara.Model {
  id?: number;
  name?: string;
  sellPrice?: string;
  iceOpen?: number;
  supportPlatform?: number;
  size?: string;
  authorized?: number;
  authorizedApp?: string[];
  defaultFeature?: string;
  integrate?: DataBusinessesValueSdkCodesIntegrate[];
  subscription?: string;
  productDesc?: string;
  subscriptionPkg?: string;
  subscriptionImp?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      sellPrice: 'SellPrice',
      iceOpen: 'IceOpen',
      supportPlatform: 'SupportPlatform',
      size: 'Size',
      authorized: 'Authorized',
      authorizedApp: 'AuthorizedApp',
      defaultFeature: 'DefaultFeature',
      integrate: 'Integrate',
      subscription: 'Subscription',
      productDesc: 'ProductDesc',
      subscriptionPkg: 'SubscriptionPkg',
      subscriptionImp: 'SubscriptionImp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      sellPrice: 'string',
      iceOpen: 'number',
      supportPlatform: 'number',
      size: 'string',
      authorized: 'number',
      authorizedApp: { 'type': 'array', 'itemType': 'string' },
      defaultFeature: 'string',
      integrate: { 'type': 'array', 'itemType': DataBusinessesValueSdkCodesIntegrate },
      subscription: 'string',
      productDesc: 'string',
      subscriptionPkg: 'string',
      subscriptionImp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizedApp)) {
      $dara.Model.validateArray(this.authorizedApp);
    }
    if(Array.isArray(this.integrate)) {
      $dara.Model.validateArray(this.integrate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataBusinessesValueSdkFeatures extends $dara.Model {
  id?: number;
  name?: string;
  scode?: string;
  svalue?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      scode: 'Scode',
      svalue: 'Svalue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      scode: 'string',
      svalue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataBusinessesValue extends $dara.Model {
  id?: number;
  name?: string;
  cname?: string;
  sname?: string;
  sdkCodes?: DataBusinessesValueSdkCodes[];
  sdkFeatures?: DataBusinessesValueSdkFeatures[];
  version?: string;
  iceOpen?: number;
  supportPlatform?: number;
  functionDesc?: string;
  productDesc?: string;
  size?: string;
  authorized?: number;
  authorizedApp?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      cname: 'Cname',
      sname: 'Sname',
      sdkCodes: 'SdkCodes',
      sdkFeatures: 'SdkFeatures',
      version: 'Version',
      iceOpen: 'IceOpen',
      supportPlatform: 'SupportPlatform',
      functionDesc: 'FunctionDesc',
      productDesc: 'ProductDesc',
      size: 'Size',
      authorized: 'Authorized',
      authorizedApp: 'AuthorizedApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      cname: 'string',
      sname: 'string',
      sdkCodes: { 'type': 'array', 'itemType': DataBusinessesValueSdkCodes },
      sdkFeatures: { 'type': 'array', 'itemType': DataBusinessesValueSdkFeatures },
      version: 'string',
      iceOpen: 'number',
      supportPlatform: 'number',
      functionDesc: 'string',
      productDesc: 'string',
      size: 'string',
      authorized: 'number',
      authorizedApp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sdkCodes)) {
      $dara.Model.validateArray(this.sdkCodes);
    }
    if(Array.isArray(this.sdkFeatures)) {
      $dara.Model.validateArray(this.sdkFeatures);
    }
    if(Array.isArray(this.authorizedApp)) {
      $dara.Model.validateArray(this.authorizedApp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

