// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListenersListener extends $dara.Model {
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListeners extends $dara.Model {
  listener?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListenersListener[];
  static names(): { [key: string]: string } {
    return {
      listener: 'Listener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listener: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListenersListener },
    };
  }

  validate() {
    if(Array.isArray(this.listener)) {
      $dara.Model.validateArray(this.listener);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects extends $dara.Model {
  listeners?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListeners;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjectsListeners,
    };
  }

  validate() {
    if(this.listeners && typeof (this.listeners as any).validate === 'function') {
      (this.listeners as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTags extends $dara.Model {
  tag?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroup extends $dara.Model {
  associatedObjects?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects;
  createTime?: string;
  masterSlaveServerGroupId?: string;
  masterSlaveServerGroupName?: string;
  tags?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTags;
  static names(): { [key: string]: string } {
    return {
      associatedObjects: 'AssociatedObjects',
      createTime: 'CreateTime',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedObjects: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupAssociatedObjects,
      createTime: 'string',
      masterSlaveServerGroupId: 'string',
      masterSlaveServerGroupName: 'string',
      tags: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroupTags,
    };
  }

  validate() {
    if(this.associatedObjects && typeof (this.associatedObjects as any).validate === 'function') {
      (this.associatedObjects as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups extends $dara.Model {
  masterSlaveServerGroup?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroup[];
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroup: { 'type': 'array', 'itemType': DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroupsMasterSlaveServerGroup },
    };
  }

  validate() {
    if(Array.isArray(this.masterSlaveServerGroup)) {
      $dara.Model.validateArray(this.masterSlaveServerGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMasterSlaveServerGroupsResponseBody extends $dara.Model {
  masterSlaveServerGroups?: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      masterSlaveServerGroups: 'MasterSlaveServerGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterSlaveServerGroups: DescribeMasterSlaveServerGroupsResponseBodyMasterSlaveServerGroups,
      requestId: 'string',
    };
  }

  validate() {
    if(this.masterSlaveServerGroups && typeof (this.masterSlaveServerGroups as any).validate === 'function') {
      (this.masterSlaveServerGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

