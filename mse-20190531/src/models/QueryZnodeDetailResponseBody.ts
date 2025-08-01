// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryZnodeDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data of the node.
   * 
   * @example
   * cluster
   */
  data?: string;
  /**
   * @remarks
   * Indicates whether the node information was returned. Valid values:
   * 
   * *   `true`: The node information was returned.
   * *   `false`: The node information failed to be returned.
   * 
   * @example
   * true
   */
  dir?: boolean;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * zookeeper
   */
  name?: string;
  /**
   * @remarks
   * The path of the node.
   * 
   * @example
   * /zookeeper
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dir: 'Dir',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dir: 'boolean',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryZnodeDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: QueryZnodeDetailResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 58E06A0A-BD2C-47A0-99C2-B100F353****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryZnodeDetailResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

