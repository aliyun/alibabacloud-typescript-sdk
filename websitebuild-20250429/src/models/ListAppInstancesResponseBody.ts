// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppInstanceAggregate } from "./AppInstanceAggregate";


export class ListAppInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: AppInstanceAggregate[];
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * https://check-result-file-sh.oss-cn-shanghai.aliyuncs.com/u6qw3gxzu3b7sbj/u6qw3gxzu3b7sbj.diff.zip?Expires=1740975709&OSSAccessKeyId=LTAI5tKUErVCETM4ev9SELNb&Signature=FP7dDnkrLlOZHmRRORVqbLOtv9c%3D
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * False
   */
  nextPage?: boolean;
  /**
   * @example
   * dw+qdTi1EjVSWX/INJdYNw==
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * False
   */
  prePage?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  resultLimit?: boolean;
  /**
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  rootErrorMsg?: string;
  /**
   * @example
   * True
   */
  synchro?: boolean;
  /**
   * @example
   * 4
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      maxResults: 'MaxResults',
      nextPage: 'NextPage',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      resultLimit: 'ResultLimit',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': AppInstanceAggregate },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      maxResults: 'number',
      nextPage: 'boolean',
      nextToken: 'string',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      resultLimit: 'boolean',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

