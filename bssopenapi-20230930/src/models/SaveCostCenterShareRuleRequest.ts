// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveCostCenterShareRuleRequestCreateShareRuleList extends $dara.Model {
  fromCostCenterList?: number[];
  shareRatioList?: number[];
  /**
   * @example
   * test
   */
  shareRuleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RATIO
   */
  shareType?: string;
  toCostCenterList?: number[];
  static names(): { [key: string]: string } {
    return {
      fromCostCenterList: 'FromCostCenterList',
      shareRatioList: 'ShareRatioList',
      shareRuleName: 'ShareRuleName',
      shareType: 'ShareType',
      toCostCenterList: 'ToCostCenterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromCostCenterList: { 'type': 'array', 'itemType': 'number' },
      shareRatioList: { 'type': 'array', 'itemType': 'number' },
      shareRuleName: 'string',
      shareType: 'string',
      toCostCenterList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.fromCostCenterList)) {
      $dara.Model.validateArray(this.fromCostCenterList);
    }
    if(Array.isArray(this.shareRatioList)) {
      $dara.Model.validateArray(this.shareRatioList);
    }
    if(Array.isArray(this.toCostCenterList)) {
      $dara.Model.validateArray(this.toCostCenterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveCostCenterShareRuleRequestModifyShareRuleList extends $dara.Model {
  fromCostCenterList?: number[];
  shareRatioList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1828
   */
  shareRuleId?: number;
  /**
   * @example
   * test
   */
  shareRuleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUSTOM
   */
  shareType?: string;
  toCostCenterList?: number[];
  static names(): { [key: string]: string } {
    return {
      fromCostCenterList: 'FromCostCenterList',
      shareRatioList: 'ShareRatioList',
      shareRuleId: 'ShareRuleId',
      shareRuleName: 'ShareRuleName',
      shareType: 'ShareType',
      toCostCenterList: 'ToCostCenterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromCostCenterList: { 'type': 'array', 'itemType': 'number' },
      shareRatioList: { 'type': 'array', 'itemType': 'number' },
      shareRuleId: 'number',
      shareRuleName: 'string',
      shareType: 'string',
      toCostCenterList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.fromCostCenterList)) {
      $dara.Model.validateArray(this.fromCostCenterList);
    }
    if(Array.isArray(this.shareRatioList)) {
      $dara.Model.validateArray(this.shareRatioList);
    }
    if(Array.isArray(this.toCostCenterList)) {
      $dara.Model.validateArray(this.toCostCenterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveCostCenterShareRuleRequest extends $dara.Model {
  createShareRuleList?: SaveCostCenterShareRuleRequestCreateShareRuleList[];
  modifyShareRuleList?: SaveCostCenterShareRuleRequestModifyShareRuleList[];
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * 1977800748053695
   */
  ownerAccountId?: number;
  removeShareRuleList?: number[];
  static names(): { [key: string]: string } {
    return {
      createShareRuleList: 'CreateShareRuleList',
      modifyShareRuleList: 'ModifyShareRuleList',
      nbid: 'Nbid',
      ownerAccountId: 'OwnerAccountId',
      removeShareRuleList: 'RemoveShareRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createShareRuleList: { 'type': 'array', 'itemType': SaveCostCenterShareRuleRequestCreateShareRuleList },
      modifyShareRuleList: { 'type': 'array', 'itemType': SaveCostCenterShareRuleRequestModifyShareRuleList },
      nbid: 'string',
      ownerAccountId: 'number',
      removeShareRuleList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.createShareRuleList)) {
      $dara.Model.validateArray(this.createShareRuleList);
    }
    if(Array.isArray(this.modifyShareRuleList)) {
      $dara.Model.validateArray(this.modifyShareRuleList);
    }
    if(Array.isArray(this.removeShareRuleList)) {
      $dara.Model.validateArray(this.removeShareRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

