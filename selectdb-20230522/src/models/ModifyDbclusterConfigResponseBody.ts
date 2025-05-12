// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBClusterConfigResponseBodyData } from "./ModifyDbclusterConfigResponseBodyData";


export class ModifyDBClusterConfigResponseBody extends $dara.Model {
  /**
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  data?: ModifyDBClusterConfigResponseBodyData;
  /**
   * @remarks
   * The dynamic code. This parameter is not returned.
   * 
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not returned.
   * 
   * @example
   * An error occurred while processing your request.
   */
  dynamicMessage?: string;
  /**
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

