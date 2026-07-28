// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * selectdb-cn-7213c8*****
   */
  dbClusterId?: string;
  /**
   * @remarks
   * Instance numeric ID.
   * 
   * @example
   * 6585
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * selectdb-cn-7213c8*****
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 107878719
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details.
   * 
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Return data.
   */
  data?: ModifyDBClusterConfigResponseBodyData;
  /**
   * @remarks
   * Dynamic code, currently not in use, please ignore.
   * 
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic message, currently not in use, please ignore.
   * 
   * @example
   * An error occurred while processing your request.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BC854513-E85E-54F3-9842-B9CCD3308CDD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: ModifyDBClusterConfigResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

