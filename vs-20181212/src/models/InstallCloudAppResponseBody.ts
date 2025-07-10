// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstallCloudAppResponseBodyFailedInstances } from "./InstallCloudAppResponseBodyFailedInstances";
import { InstallCloudAppResponseBodySuccessInstances } from "./InstallCloudAppResponseBodySuccessInstances";


export class InstallCloudAppResponseBody extends $dara.Model {
  failedInstanceCount?: number;
  failedInstances?: InstallCloudAppResponseBodyFailedInstances[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  successInstanceCount?: number;
  successInstances?: InstallCloudAppResponseBodySuccessInstances[];
  static names(): { [key: string]: string } {
    return {
      failedInstanceCount: 'FailedInstanceCount',
      failedInstances: 'FailedInstances',
      requestId: 'RequestId',
      successInstanceCount: 'SuccessInstanceCount',
      successInstances: 'SuccessInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedInstanceCount: 'number',
      failedInstances: { 'type': 'array', 'itemType': InstallCloudAppResponseBodyFailedInstances },
      requestId: 'string',
      successInstanceCount: 'number',
      successInstances: { 'type': 'array', 'itemType': InstallCloudAppResponseBodySuccessInstances },
    };
  }

  validate() {
    if(Array.isArray(this.failedInstances)) {
      $dara.Model.validateArray(this.failedInstances);
    }
    if(Array.isArray(this.successInstances)) {
      $dara.Model.validateArray(this.successInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

