// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccessConfigurationResponseBodyAccessConfiguration extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The time when the access configuration was created.
   * 
   * @example
   * 2021-11-02T08:44:23Z
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
   * The initial web page
   * 
   * that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The duration of a session
   * 
   * in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * Unit: seconds.
   * 
   * @example
   * 3600
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The status notifications.
   */
  statusNotifications?: string[];
  /**
   * @remarks
   * The time when the information about the access configuration was modified.
   * 
   * @example
   * 2021-11-02T10:10:01Z
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
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statusNotifications)) {
      $dara.Model.validateArray(this.statusNotifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access configuration.
   */
  accessConfiguration?: UpdateAccessConfigurationResponseBodyAccessConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B13E4EE-3853-5852-9165-597C32AD8FB7
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
      accessConfiguration: UpdateAccessConfigurationResponseBodyAccessConfiguration,
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

