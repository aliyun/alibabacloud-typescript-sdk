// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntityDiscoverRuleAnnotations extends $dara.Model {
  /**
   * @remarks
   * The operation.
   * 
   * @example
   * in
   */
  op?: string;
  /**
   * @remarks
   * The key of the annotation.
   * 
   * @example
   * instanceId
   */
  tagKey?: string;
  /**
   * @remarks
   * The collection of annotation values.
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
   * The key of the property.
   * 
   * @example
   * instanceId
   */
  fieldKey?: string;
  /**
   * @remarks
   * The collection of property values.
   */
  fieldValues?: string[];
  /**
   * @remarks
   * The operation.
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
   * The CIDR block of the IP address.
   * 
   * @example
   * 192.168.0.0/16
   */
  ipCIDR?: string;
  /**
   * @remarks
   * The property key of the IP address.
   * 
   * @example
   * ecs_ip
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
   * The operation.
   * 
   * @example
   * in
   */
  op?: string;
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * project
   */
  tagKey?: string;
  /**
   * @remarks
   * The collection of label values.
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
   * The operation.
   * 
   * @example
   * in
   */
  op?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * project
   */
  tagKey?: string;
  /**
   * @remarks
   * The collection of tag values.
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
   * The collection of annotation matching rules.
   */
  annotations?: EntityDiscoverRuleAnnotations[];
  /**
   * @remarks
   * The collection of entity types.
   */
  entityTypes?: string[];
  /**
   * @remarks
   * The property matching rules.
   */
  fieldRules?: EntityDiscoverRuleFieldRules[];
  /**
   * @remarks
   * The collection of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The collection of IP matching rules.
   */
  ipMatchRule?: EntityDiscoverRuleIpMatchRule;
  /**
   * @remarks
   * The collection of label matching rules.
   */
  labels?: EntityDiscoverRuleLabels[];
  /**
   * @remarks
   * The collection of region IDs.
   */
  regionIds?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm2m7atreujs1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag-based service discovery settings.
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
      ipMatchRule: EntityDiscoverRuleIpMatchRule,
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
    if(this.ipMatchRule && typeof (this.ipMatchRule as any).validate === 'function') {
      (this.ipMatchRule as any).validate();
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

