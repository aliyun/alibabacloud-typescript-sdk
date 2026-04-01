// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode extends $dara.Model {
  defaultPasswd?: string;
  ecsId?: string;
  ecsIp?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPasswd: 'DefaultPasswd',
      ecsId: 'EcsId',
      ecsIp: 'EcsIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPasswd: 'string',
      ecsId: 'string',
      ecsIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes extends $dara.Model {
  clientMasterNode?: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode[];
  static names(): { [key: string]: string } {
    return {
      clientMasterNode: 'ClientMasterNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientMasterNode: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode },
    };
  }

  validate() {
    if(Array.isArray(this.clientMasterNode)) {
      $dara.Model.validateArray(this.clientMasterNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargetsMountTargetTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargetsMountTargetTags extends $dara.Model {
  tag?: DescribeMountTargetsResponseBodyMountTargetsMountTargetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargetsMountTargetTagsTag },
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

export class DescribeMountTargetsResponseBodyMountTargetsMountTarget extends $dara.Model {
  accessGroup?: string;
  clientMasterNodes?: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes;
  dualStackMountTargetDomain?: string;
  IPVersion?: string;
  mountTargetDomain?: string;
  networkType?: string;
  status?: string;
  tags?: DescribeMountTargetsResponseBodyMountTargetsMountTargetTags;
  vpcId?: string;
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      clientMasterNodes: 'ClientMasterNodes',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      IPVersion: 'IPVersion',
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      clientMasterNodes: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes,
      dualStackMountTargetDomain: 'string',
      IPVersion: 'string',
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      tags: DescribeMountTargetsResponseBodyMountTargetsMountTargetTags,
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    if(this.clientMasterNodes && typeof (this.clientMasterNodes as any).validate === 'function') {
      (this.clientMasterNodes as any).validate();
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

export class DescribeMountTargetsResponseBodyMountTargets extends $dara.Model {
  mountTarget?: DescribeMountTargetsResponseBodyMountTargetsMountTarget[];
  static names(): { [key: string]: string } {
    return {
      mountTarget: 'MountTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTarget: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargetsMountTarget },
    };
  }

  validate() {
    if(Array.isArray(this.mountTarget)) {
      $dara.Model.validateArray(this.mountTarget);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBody extends $dara.Model {
  mountTargets?: DescribeMountTargetsResponseBodyMountTargets;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3BAB90FD-B4A0-48DA-9F09-2B963510****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of mount targets.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: DescribeMountTargetsResponseBodyMountTargets,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.mountTargets && typeof (this.mountTargets as any).validate === 'function') {
      (this.mountTargets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

