// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1578469042851
   */
  creationTime?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 123123
   */
  creatorId?: number;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * xxx
   */
  creatorName?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * 这是第一个实例
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 90515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * 第一个实例
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum number of concurrent conversations.
   * 
   * @example
   * 5
   */
  maxConcurrentConversation?: number;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * xxx
   */
  ownerName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      ownerName: 'OwnerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      creatorId: 'number',
      creatorName: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      ownerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The instance information.
   * 
   * @example
   * {\\"InstanceId\\": \\"ob369xifpi2074\\", \\"AutoUpgradeObVersion\\": False}
   */
  instance?: ModifyInstanceResponseBodyInstance;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: ModifyInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

