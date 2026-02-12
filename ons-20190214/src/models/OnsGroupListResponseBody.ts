// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsGroupListResponseBodyDataSubscribeInfoDoTagsTag extends $dara.Model {
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

export class OnsGroupListResponseBodyDataSubscribeInfoDoTags extends $dara.Model {
  tag?: OnsGroupListResponseBodyDataSubscribeInfoDoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsGroupListResponseBodyDataSubscribeInfoDoTagsTag },
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

export class OnsGroupListResponseBodyDataSubscribeInfoDo extends $dara.Model {
  createTime?: number;
  groupId?: string;
  groupType?: string;
  independentNaming?: boolean;
  instanceId?: string;
  owner?: string;
  remark?: string;
  tags?: OnsGroupListResponseBodyDataSubscribeInfoDoTags;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      groupType: 'GroupType',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      owner: 'Owner',
      remark: 'Remark',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupId: 'string',
      groupType: 'string',
      independentNaming: 'boolean',
      instanceId: 'string',
      owner: 'string',
      remark: 'string',
      tags: OnsGroupListResponseBodyDataSubscribeInfoDoTags,
      updateTime: 'number',
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

export class OnsGroupListResponseBodyData extends $dara.Model {
  subscribeInfoDo?: OnsGroupListResponseBodyDataSubscribeInfoDo[];
  static names(): { [key: string]: string } {
    return {
      subscribeInfoDo: 'SubscribeInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeInfoDo: { 'type': 'array', 'itemType': OnsGroupListResponseBodyDataSubscribeInfoDo },
    };
  }

  validate() {
    if(Array.isArray(this.subscribeInfoDo)) {
      $dara.Model.validateArray(this.subscribeInfoDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponseBody extends $dara.Model {
  data?: OnsGroupListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 16996623-AC4A-43AF-9248-FD9D2D75****
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
      data: OnsGroupListResponseBodyData,
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

