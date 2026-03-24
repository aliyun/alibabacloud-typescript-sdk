// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntityDiscoverRuleAnnotations extends $dara.Model {
  /**
   * @remarks
   * 操作。
   * 
   * @example
   * in
   */
  op?: string;
  /**
   * @remarks
   * 注解的Key。
   * 
   * @example
   * instanceId
   */
  tagKey?: string;
  /**
   * @remarks
   * 注解的值集合。
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tagKey: 'tagKey',
      tagValues: 'tagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDiscoverRuleFieldRules extends $dara.Model {
  /**
   * @remarks
   * 属性的Key。
   * 
   * @example
   * instanceId
   */
  fieldKey?: string;
  /**
   * @remarks
   * 属性的值集合。
   */
  fieldValues?: string[];
  /**
   * @remarks
   * 操作。
   * 
   * @example
   * in
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      fieldValues: 'fieldValues',
      op: 'op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      fieldValues: { 'type': 'array', 'itemType': 'string' },
      op: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldValues)) {
      $dara.Model.validateArray(this.fieldValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDiscoverRuleIpMatchRule extends $dara.Model {
  /**
   * @remarks
   * IP的CIDR。
   * 
   * @example
   * 192.168.0.1/10
   */
  ipCIDR?: string;
  /**
   * @remarks
   * IP字段的Key。
   * 
   * @example
   * hostIp
   */
  ipFieldKey?: string;
  static names(): { [key: string]: string } {
    return {
      ipCIDR: 'ipCIDR',
      ipFieldKey: 'ipFieldKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipCIDR: 'string',
      ipFieldKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDiscoverRuleLabels extends $dara.Model {
  /**
   * @remarks
   * 操作。
   * 
   * @example
   * in
   */
  op?: string;
  /**
   * @remarks
   * 标签的Key。
   * 
   * @example
   * project
   */
  tagKey?: string;
  /**
   * @remarks
   * 标签的值集合。
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tagKey: 'tagKey',
      tagValues: 'tagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDiscoverRuleTags extends $dara.Model {
  /**
   * @remarks
   * 操作。
   * 
   * @example
   * in
   */
  op?: string;
  /**
   * @remarks
   * Tag的Key。
   * 
   * @example
   * project
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag的值集合。
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      tagKey: 'tagKey',
      tagValues: 'tagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDiscoverRule extends $dara.Model {
  /**
   * @remarks
   * 注解匹配集合。
   */
  annotations?: EntityDiscoverRuleAnnotations[];
  /**
   * @remarks
   * 实体类型集合。
   */
  entityTypes?: string[];
  /**
   * @remarks
   * 属性匹配规则。
   */
  fieldRules?: EntityDiscoverRuleFieldRules[];
  /**
   * @remarks
   * 实例ID集合。
   */
  instanceIds?: string[];
  /**
   * @remarks
   * IP匹配规则集合。
   */
  ipMatchRule?: EntityDiscoverRuleIpMatchRule[];
  /**
   * @remarks
   * 标签匹配集合。
   */
  labels?: EntityDiscoverRuleLabels[];
  /**
   * @remarks
   * 地域ID集合。
   */
  regionIds?: string[];
  /**
   * @remarks
   * 资源组ID。
   * 
   * @example
   * rg-acfm2m7atreujs1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 通过Tag进行服务发现。
   */
  tags?: EntityDiscoverRuleTags[];
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      entityTypes: 'entityTypes',
      fieldRules: 'fieldRules',
      instanceIds: 'instanceIds',
      ipMatchRule: 'ipMatchRule',
      labels: 'labels',
      regionIds: 'regionIds',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': EntityDiscoverRuleAnnotations },
      entityTypes: { 'type': 'array', 'itemType': 'string' },
      fieldRules: { 'type': 'array', 'itemType': EntityDiscoverRuleFieldRules },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ipMatchRule: { 'type': 'array', 'itemType': EntityDiscoverRuleIpMatchRule },
      labels: { 'type': 'array', 'itemType': EntityDiscoverRuleLabels },
      regionIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': EntityDiscoverRuleTags },
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(Array.isArray(this.entityTypes)) {
      $dara.Model.validateArray(this.entityTypes);
    }
    if(Array.isArray(this.fieldRules)) {
      $dara.Model.validateArray(this.fieldRules);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.ipMatchRule)) {
      $dara.Model.validateArray(this.ipMatchRule);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

