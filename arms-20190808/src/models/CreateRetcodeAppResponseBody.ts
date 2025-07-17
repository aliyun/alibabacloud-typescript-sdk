// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRetcodeAppResponseBodyRetcodeAppDataBeanTagsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
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

export class CreateRetcodeAppResponseBodyRetcodeAppDataBeanTags extends $dara.Model {
  tags?: CreateRetcodeAppResponseBodyRetcodeAppDataBeanTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': CreateRetcodeAppResponseBodyRetcodeAppDataBeanTagsTags },
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

export class CreateRetcodeAppResponseBodyRetcodeAppDataBean extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 135143
   */
  appId?: number;
  /**
   * @remarks
   * The process identifier (PID) of the application.
   * 
   * @example
   * aokcdqn3ly@a195c6d6421****
   */
  pid?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the task.
   */
  tags?: CreateRetcodeAppResponseBodyRetcodeAppDataBeanTags;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pid: 'string',
      resourceGroupId: 'string',
      tags: CreateRetcodeAppResponseBodyRetcodeAppDataBeanTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful. If another status code is returned, the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * bdidt76ehx@d5cf1cd3f7df411
   */
  data?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C647A
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the Browser Monitoring task.
   */
  retcodeAppDataBean?: CreateRetcodeAppResponseBodyRetcodeAppDataBean;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      retcodeAppDataBean: 'RetcodeAppDataBean',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      retcodeAppDataBean: CreateRetcodeAppResponseBodyRetcodeAppDataBean,
      success: 'boolean',
    };
  }

  validate() {
    if(this.retcodeAppDataBean && typeof (this.retcodeAppDataBean as any).validate === 'function') {
      (this.retcodeAppDataBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

