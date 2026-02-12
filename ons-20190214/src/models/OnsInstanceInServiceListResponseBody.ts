// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsInstanceInServiceListResponseBodyDataInstanceVOTagsTag extends $dara.Model {
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

export class OnsInstanceInServiceListResponseBodyDataInstanceVOTags extends $dara.Model {
  tag?: OnsInstanceInServiceListResponseBodyDataInstanceVOTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsInstanceInServiceListResponseBodyDataInstanceVOTagsTag },
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

export class OnsInstanceInServiceListResponseBodyDataInstanceVO extends $dara.Model {
  createTime?: number;
  groupCount?: number;
  independentNaming?: boolean;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: number;
  instanceType?: number;
  releaseTime?: number;
  tags?: OnsInstanceInServiceListResponseBodyDataInstanceVOTags;
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupCount: 'GroupCount',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      releaseTime: 'ReleaseTime',
      tags: 'Tags',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupCount: 'number',
      independentNaming: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'number',
      instanceType: 'number',
      releaseTime: 'number',
      tags: OnsInstanceInServiceListResponseBodyDataInstanceVOTags,
      topicCount: 'number',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponseBodyData extends $dara.Model {
  instanceVO?: OnsInstanceInServiceListResponseBodyDataInstanceVO[];
  static names(): { [key: string]: string } {
    return {
      instanceVO: 'InstanceVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceVO: { 'type': 'array', 'itemType': OnsInstanceInServiceListResponseBodyDataInstanceVO },
    };
  }

  validate() {
    if(Array.isArray(this.instanceVO)) {
      $dara.Model.validateArray(this.instanceVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponseBody extends $dara.Model {
  data?: OnsInstanceInServiceListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0598E46F-DB06-40E2-AD7B-C45923EE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsInstanceInServiceListResponseBodyData,
      requestId: 'string',
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

