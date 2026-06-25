// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyDataApplicationsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataApplications extends $dara.Model {
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 0
   */
  active?: number;
  /**
   * @remarks
   * The description of the job template.
   * 
   * @example
   * description
   */
  appDescription?: string;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * f7730764-d88f-4b9a-8d8e-cd8efbfe****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The time when the last job was completed.
   * 
   * @example
   * 1657522839
   */
  completionTime?: number;
  /**
   * @remarks
   * The CPU required for each instance, in millicores. The value cannot be 0. Only the following defined specifications are supported:
   * 
   * - **500**
   * 
   * - **1000**
   * 
   * - **2000**
   * 
   * - **4000**
   * 
   * - **8000**
   * 
   * - **16000**
   * 
   * - **32000**
   * 
   * @example
   * 500
   */
  cpu?: number;
  /**
   * @remarks
   * The number of failed instances.
   * 
   * @example
   * 0
   */
  failed?: number;
  /**
   * @remarks
   * The image URL.
   */
  imageUrl?: string;
  /**
   * @remarks
   * Indicates whether the last release order was successfully executed. Valid values:
   * 
   * - **0**: The release order failed to be executed.
   * 
   * - **1**: The release order was successfully executed.
   * 
   * @example
   * 1
   */
  lastChangeorderState?: string;
  /**
   * @remarks
   * The state of the last job. Valid values:
   * 
   * - **0**: Not executed.
   * 
   * - **1**: Successful.
   * 
   * - **2**: Failed.
   * 
   * - **3**: Running.
   * 
   * @example
   * 0
   */
  lastJobState?: string;
  /**
   * @remarks
   * The time when the last job was started.
   * 
   * @example
   * 1657522800
   */
  lastStartTime?: number;
  /**
   * @remarks
   * The memory required for each instance, in MB. The value cannot be 0. This parameter corresponds to the CPU parameter. Only the following defined specifications are supported:
   * 
   * - **1024**: corresponds to 500 and 1,000 millicores of CPU.
   * 
   * - **2048**: corresponds to 500, 1,000, and 2,000 millicores of CPU.
   * 
   * - **4096**: corresponds to 1,000, 2,000, and 4,000 millicores of CPU.
   * 
   * - **8192**: corresponds to 2,000, 4,000, and 8,000 millicores of CPU.
   * 
   * - **12288**: corresponds to 12,000 millicores of CPU.
   * 
   * - **16384**: corresponds to 4,000, 8,000, and 16,000 millicores of CPU.
   * 
   * - **24576**: corresponds to 12,000 millicores of CPU.
   * 
   * - **32768**: corresponds to 16,000 millicores of CPU.
   * 
   * - **65536**: corresponds to 8,000, 16,000, and 32,000 millicores of CPU.
   * 
   * - **131072**: corresponds to 32,000 millicores of CPU.
   * 
   * @example
   * 1024
   */
  mem?: number;
  /**
   * @remarks
   * Additional information about the call.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of successful instances.
   * 
   * @example
   * 3
   */
  succeeded?: number;
  /**
   * @remarks
   * Indicates whether the job template is paused.
   * 
   * @example
   * false
   */
  suspend?: boolean;
  /**
   * @remarks
   * The tags of the job template.
   */
  tags?: ListJobsResponseBodyDataApplicationsTags[];
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      completionTime: 'CompletionTime',
      cpu: 'Cpu',
      failed: 'Failed',
      imageUrl: 'ImageUrl',
      lastChangeorderState: 'LastChangeorderState',
      lastJobState: 'LastJobState',
      lastStartTime: 'LastStartTime',
      mem: 'Mem',
      message: 'Message',
      namespaceId: 'NamespaceId',
      regionId: 'RegionId',
      succeeded: 'Succeeded',
      suspend: 'Suspend',
      tags: 'Tags',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      completionTime: 'number',
      cpu: 'number',
      failed: 'number',
      imageUrl: 'string',
      lastChangeorderState: 'string',
      lastJobState: 'string',
      lastStartTime: 'number',
      mem: 'number',
      message: 'string',
      namespaceId: 'string',
      regionId: 'string',
      succeeded: 'number',
      suspend: 'boolean',
      tags: { 'type': 'array', 'itemType': ListJobsResponseBodyDataApplicationsTags },
      triggerConfig: 'string',
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

export class ListJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of job templates.
   */
  applications?: ListJobsResponseBodyDataApplications[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of job templates.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListJobsResponseBodyDataApplications },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the interface or the POP error code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: Redirection.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of job templates.
   */
  data?: ListJobsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - If the request is successful, this parameter is not returned.
   * 
   * - If the request fails, this parameter is returned. For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information about the call.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4D805CA-926D-41B1-8E63-7AD0C1ED****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the list of job templates was obtained. Valid values:
   * 
   * - **true**: The list was obtained.
   * 
   * - **false**: The list failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of job templates.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: ListJobsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
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

