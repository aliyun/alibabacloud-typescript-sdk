// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ae4572af-376f-439f-8970-38764acbaa91
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Count
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
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

