// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackendInfoResponseBodyBackendInfoBackendModels } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModels";


export class DescribeBackendInfoResponseBodyBackendInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 6fc978bb63574146b766863dd7bdf661
   */
  backendId?: string;
  /**
   * @remarks
   * The configurations of the backend service in the environment.
   */
  backendModels?: DescribeBackendInfoResponseBodyBackendInfoBackendModels[];
  /**
   * @remarks
   * The name of the backend service.
   * 
   * @example
   * testoss2
   */
  backendName?: string;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * @example
   * HTTP
   */
  backendType?: string;
  /**
   * @remarks
   * The time when the backend service was created.
   * 
   * @example
   * 2021-11-22T11:10:46+08:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the backend service.
   * 
   * @example
   * add
   */
  description?: string;
  /**
   * @remarks
   * The time when the backend service was modified.
   * 
   * @example
   * 2017-12-11T15:18:09+08:00
   */
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendModels: 'BackendModels',
      backendName: 'BackendName',
      backendType: 'BackendType',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendModels: { 'type': 'array', 'itemType': DescribeBackendInfoResponseBodyBackendInfoBackendModels },
      backendName: 'string',
      backendType: 'string',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backendModels)) {
      $dara.Model.validateArray(this.backendModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

