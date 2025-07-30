// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 1
   */
  autoTranscoding?: number;
  /**
   * @example
   * 0
   */
  channelId0?: number;
  /**
   * @example
   * 1
   */
  channelId1?: number;
  /**
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @example
   * 2019-06-20T17:33Z
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  createType?: number;
  /**
   * @example
   * 3
   */
  dataSetType?: number;
  /**
   * @example
   * 0
   */
  isDelete?: number;
  /**
   * @example
   * filesFromLocal/ef7ff45c147a4a5e882c925f9a75ac43
   */
  roleConfigProp?: string;
  /**
   * @example
   * 1
   */
  roleConfigStatus?: number;
  /**
   * @example
   * xx
   */
  roleConfigTask?: string;
  /**
   * @example
   * “”
   */
  setBucketName?: string;
  /**
   * @example
   * “”
   */
  setDomain?: string;
  /**
   * @example
   * “”
   */
  setFolderName?: string;
  /**
   * @example
   * 1
   */
  setId?: number;
  setName?: string;
  /**
   * @example
   * 1
   */
  setNumber?: number;
  /**
   * @example
   * “”
   */
  setRoleArn?: string;
  /**
   * @example
   * 1
   */
  setType?: number;
  /**
   * @example
   * 11
   */
  sourceDataType?: number;
  /**
   * @example
   * xx
   */
  subDir?: string;
  /**
   * @example
   * 2022-05-10T10:34Z
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      autoTranscoding: 'AutoTranscoding',
      channelId0: 'ChannelId0',
      channelId1: 'ChannelId1',
      channelType: 'ChannelType',
      createTime: 'CreateTime',
      createType: 'CreateType',
      dataSetType: 'DataSetType',
      isDelete: 'IsDelete',
      roleConfigProp: 'RoleConfigProp',
      roleConfigStatus: 'RoleConfigStatus',
      roleConfigTask: 'RoleConfigTask',
      setBucketName: 'SetBucketName',
      setDomain: 'SetDomain',
      setFolderName: 'SetFolderName',
      setId: 'SetId',
      setName: 'SetName',
      setNumber: 'SetNumber',
      setRoleArn: 'SetRoleArn',
      setType: 'SetType',
      sourceDataType: 'SourceDataType',
      subDir: 'SubDir',
      updateTime: 'UpdateTime',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoTranscoding: 'number',
      channelId0: 'number',
      channelId1: 'number',
      channelType: 'number',
      createTime: 'string',
      createType: 'number',
      dataSetType: 'number',
      isDelete: 'number',
      roleConfigProp: 'string',
      roleConfigStatus: 'number',
      roleConfigTask: 'string',
      setBucketName: 'string',
      setDomain: 'string',
      setFolderName: 'string',
      setId: 'number',
      setName: 'string',
      setNumber: 'number',
      setRoleArn: 'string',
      setType: 'number',
      sourceDataType: 'number',
      subDir: 'string',
      updateTime: 'string',
      userGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyData extends $dara.Model {
  data?: ListDataSetResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataSetResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 23
   */
  count?: number;
  /**
   * @example
   * 10
   */
  currentPage?: number;
  data?: ListDataSetResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: ListDataSetResponseBodyMessages;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: ListDataSetResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      messages: ListDataSetResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

