// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * 435986
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
   * The description of the instance.
   * 
   * @example
   * This is the first instance
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
   * First instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum number of concurrent conversations for the instance.
   * 
   * @example
   * 4
   */
  maxConcurrentConversation?: number;
  /**
   * @remarks
   * The name of the instance owner.
   * 
   * @example
   * xxxx
   */
  ownerName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 90515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  resourceGroupId?: string;
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $dara.Model {
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
   */
  instance?: DescribeInstanceResponseBodyInstance;
  /**
   * @remarks
   * The message returned by the API.
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
   * Indicates whether the request is successful.
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
      instance: DescribeInstanceResponseBodyInstance,
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

