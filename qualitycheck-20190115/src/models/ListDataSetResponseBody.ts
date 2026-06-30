// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetResponseBodyDataData extends $dara.Model {
  autoTranscoding?: number;
  channelId0?: number;
  channelId1?: number;
  channelType?: number;
  createTime?: string;
  createType?: number;
  dataSetType?: number;
  isDelete?: number;
  roleConfigProp?: string;
  roleConfigStatus?: number;
  roleConfigTask?: string;
  setBucketName?: string;
  setDomain?: string;
  setFolderName?: string;
  setId?: number;
  setName?: string;
  setNumber?: number;
  setRoleArn?: string;
  setType?: number;
  sourceDataType?: number;
  subDir?: string;
  updateTime?: string;
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
   * @remarks
   * Result code. **200** indicates success. Other values indicate failure. Callers can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 23
   */
  count?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 10
   */
  currentPage?: number;
  data?: ListDataSetResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error details if an error occurs; "successful" on success.
   * 
   * @example
   * successful
   */
  message?: string;
  messages?: ListDataSetResponseBodyMessages;
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Callers can use this field to determine if the request succeeded: true for success; false/null for failure.
   * 
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

