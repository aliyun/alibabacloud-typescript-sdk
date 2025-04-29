// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackendListResponseBodyBackendInfoListTags } from "./DescribeBackendListResponseBodyBackendInfoListTags";


export class DescribeBackendListResponseBodyBackendInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 35bd31d32c9c425ebbe9330db9f8c375
   */
  backendId?: string;
  /**
   * @remarks
   * The name of the backend service.
   * 
   * @example
   * test
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
   * 2022-01-25T11:22:29Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the backend service.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the backend service was modified.
   * 
   * @example
   * 2022-01-25T11:22:29Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeBackendListResponseBodyBackendInfoListTags[];
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendName: 'BackendName',
      backendType: 'BackendType',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendName: 'string',
      backendType: 'string',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      tags: { 'type': 'array', 'itemType': DescribeBackendListResponseBodyBackendInfoListTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

