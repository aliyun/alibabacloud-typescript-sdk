// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionMetaResponseBodySubscriptionMetaList extends $dara.Model {
  /**
   * @remarks
   * The consumer offset of the subtask. It is a UNIX timestamp that is generated when the client consumes the first data record. Unit: seconds.
   * 
   * >  You can use a search engine to obtain a UNIX timestamp converter.
   * 
   * @example
   * 1610524452
   */
  checkpoint?: number;
  /**
   * @remarks
   * The objects of the subtask. For more information, see [Objects of DTS tasks](https://help.aliyun.com/document_detail/209545.html).
   * 
   * @example
   * {\\"dtstestdata\\":{\\"name\\":\\"dtstestdata\\",\\"all\\":false,\\"Table\\":{\\"order\\":{\\"name\\":\\"order\\",\\"all\\":true}}}}
   */
  DBList?: string;
  /**
   * @remarks
   * The endpoint and port number of the change tracking instance.
   * 
   * @example
   * dts-cn-hangzhou.aliyuncs.com:18001
   */
  DProxyUrl?: string;
  /**
   * @remarks
   * The consumer group ID of the subtask.
   * 
   * @example
   * z38m91gg2******
   */
  sid?: string;
  /**
   * @remarks
   * The topic of the subtask.
   * 
   * @example
   * cn_hangzhou_rm_bp1n0x0x5tz******_dtstestdata_version2
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      DBList: 'DBList',
      DProxyUrl: 'DProxyUrl',
      sid: 'Sid',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'number',
      DBList: 'string',
      DProxyUrl: 'string',
      sid: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C12E7A51-09A4-5796-94BE-08B6DA******
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the subtasks.
   */
  subscriptionMetaList?: DescribeSubscriptionMetaResponseBodySubscriptionMetaList[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      subscriptionMetaList: 'SubscriptionMetaList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      subscriptionMetaList: { 'type': 'array', 'itemType': DescribeSubscriptionMetaResponseBodySubscriptionMetaList },
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subscriptionMetaList)) {
      $dara.Model.validateArray(this.subscriptionMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

