// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTopicListResponseBodyDataPublishInfoDoTagsTag extends $dara.Model {
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

export class OnsTopicListResponseBodyDataPublishInfoDoTags extends $dara.Model {
  tag?: OnsTopicListResponseBodyDataPublishInfoDoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsTopicListResponseBodyDataPublishInfoDoTagsTag },
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

export class OnsTopicListResponseBodyDataPublishInfoDo extends $dara.Model {
  createTime?: number;
  independentNaming?: boolean;
  instanceId?: string;
  messageType?: number;
  owner?: string;
  relation?: number;
  relationName?: string;
  remark?: string;
  serviceStatus?: number;
  tags?: OnsTopicListResponseBodyDataPublishInfoDoTags;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      messageType: 'MessageType',
      owner: 'Owner',
      relation: 'Relation',
      relationName: 'RelationName',
      remark: 'Remark',
      serviceStatus: 'ServiceStatus',
      tags: 'Tags',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      independentNaming: 'boolean',
      instanceId: 'string',
      messageType: 'number',
      owner: 'string',
      relation: 'number',
      relationName: 'string',
      remark: 'string',
      serviceStatus: 'number',
      tags: OnsTopicListResponseBodyDataPublishInfoDoTags,
      topic: 'string',
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

export class OnsTopicListResponseBodyData extends $dara.Model {
  publishInfoDo?: OnsTopicListResponseBodyDataPublishInfoDo[];
  static names(): { [key: string]: string } {
    return {
      publishInfoDo: 'PublishInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishInfoDo: { 'type': 'array', 'itemType': OnsTopicListResponseBodyDataPublishInfoDo },
    };
  }

  validate() {
    if(Array.isArray(this.publishInfoDo)) {
      $dara.Model.validateArray(this.publishInfoDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponseBody extends $dara.Model {
  data?: OnsTopicListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 4A978869-7681-4529-B470-107E1379****
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
      data: OnsTopicListResponseBodyData,
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

