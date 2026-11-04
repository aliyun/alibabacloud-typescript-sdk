// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceAllDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * TestIotInstanceId
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestIsolationId
   */
  isolationId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      isolationId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

