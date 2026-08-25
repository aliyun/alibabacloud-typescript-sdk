// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessConfigurationResponseBodyAccessConfigurationTags extends $dara.Model {
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

export class GetAccessConfigurationResponseBodyAccessConfiguration extends $dara.Model {
  /**
   * @remarks
   * The access configuration ID.
   * 
   * @example
   * ac-00ccule7tadaijxc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * VPC-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The time when the access configuration was created.
   * 
   * @example
   * 2021-06-30T09:39:44Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access configuration.
   * 
   * @example
   * This is an access configuration.
   */
  description?: string;
  /**
   * @remarks
   * The initial access page.
   * 
   * The URL of the initial page that is displayed when a CloudSSO user uses the access configuration to access an account in a resource directory.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The session duration.
   * 
   * The maximum duration of a session when a CloudSSO user uses the access configuration to access an account in a resource directory.
   * 
   * Unit: seconds.
   * 
   * @example
   * 3600
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The status notification information.
   */
  statusNotifications?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: GetAccessConfigurationResponseBodyAccessConfigurationTags[];
  /**
   * @remarks
   * The time when the access configuration was last modified.
   * 
   * @example
   * 2021-07-26T03:02:11Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      description: 'Description',
      relayState: 'RelayState',
      sessionDuration: 'SessionDuration',
      statusNotifications: 'StatusNotifications',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      description: 'string',
      relayState: 'string',
      sessionDuration: 'number',
      statusNotifications: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetAccessConfigurationResponseBodyAccessConfigurationTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statusNotifications)) {
      $dara.Model.validateArray(this.statusNotifications);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access configuration information.
   */
  accessConfiguration?: GetAccessConfigurationResponseBodyAccessConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E40508-483B-52F6-993C-D880B0F87591
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfiguration: 'AccessConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfiguration: GetAccessConfigurationResponseBodyAccessConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessConfiguration && typeof (this.accessConfiguration as any).validate === 'function') {
      (this.accessConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

