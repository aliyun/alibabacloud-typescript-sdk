// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupContactGroupList extends $dara.Model {
  contactGroupList?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroupList)) {
      $dara.Model.validateArray(this.contactGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  tagValueMatchFunction?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      tagValueMatchFunction: 'TagValueMatchFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
      tagValueMatchFunction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress extends $dara.Model {
  matchExpress?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress[];
  static names(): { [key: string]: string } {
    return {
      matchExpress: 'MatchExpress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchExpress: { 'type': 'array', 'itemType': DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress },
    };
  }

  validate() {
    if(Array.isArray(this.matchExpress)) {
      $dara.Model.validateArray(this.matchExpress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTagValueBlacklist extends $dara.Model {
  tagValueBlacklist?: string[];
  static names(): { [key: string]: string } {
    return {
      tagValueBlacklist: 'TagValueBlacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValueBlacklist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValueBlacklist)) {
      $dara.Model.validateArray(this.tagValueBlacklist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList extends $dara.Model {
  templateIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.templateIdList)) {
      $dara.Model.validateArray(this.templateIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroup extends $dara.Model {
  contactGroupList?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupContactGroupList;
  dynamicTagRuleId?: string;
  matchExpress?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress;
  matchExpressFilterRelation?: string;
  regionId?: string;
  status?: string;
  tagKey?: string;
  tagValueBlacklist?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTagValueBlacklist;
  templateIdList?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList;
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
      dynamicTagRuleId: 'DynamicTagRuleId',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
      status: 'Status',
      tagKey: 'TagKey',
      tagValueBlacklist: 'TagValueBlacklist',
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupContactGroupList,
      dynamicTagRuleId: 'string',
      matchExpress: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress,
      matchExpressFilterRelation: 'string',
      regionId: 'string',
      status: 'string',
      tagKey: 'string',
      tagValueBlacklist: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTagValueBlacklist,
      templateIdList: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList,
    };
  }

  validate() {
    if(this.contactGroupList && typeof (this.contactGroupList as any).validate === 'function') {
      (this.contactGroupList as any).validate();
    }
    if(this.matchExpress && typeof (this.matchExpress as any).validate === 'function') {
      (this.matchExpress as any).validate();
    }
    if(this.tagValueBlacklist && typeof (this.tagValueBlacklist as any).validate === 'function') {
      (this.tagValueBlacklist as any).validate();
    }
    if(this.templateIdList && typeof (this.templateIdList as any).validate === 'function') {
      (this.templateIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupList extends $dara.Model {
  tagGroup?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroup[];
  static names(): { [key: string]: string } {
    return {
      tagGroup: 'TagGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagGroup: { 'type': 'array', 'itemType': DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroup },
    };
  }

  validate() {
    if(Array.isArray(this.tagGroup)) {
      $dara.Model.validateArray(this.tagGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > A status code of 200 indicates that the operation was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D50523D-8D59-4A61-B58E-E2286ECFB3A9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  tagGroupList?: DescribeDynamicTagRuleListResponseBodyTagGroupList;
  /**
   * @remarks
   * The total number of entries in the tag list.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      tagGroupList: 'TagGroupList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      tagGroupList: DescribeDynamicTagRuleListResponseBodyTagGroupList,
      total: 'number',
    };
  }

  validate() {
    if(this.tagGroupList && typeof (this.tagGroupList as any).validate === 'function') {
      (this.tagGroupList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

