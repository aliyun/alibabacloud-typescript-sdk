// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataValue extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID or Resource Access Management (RAM) user to which the AccessKey pair that is used to create the static username and password belongs.
   * 
   * @example
   * 1565************1
   */
  masterUid?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * amqp-cn-uqm******03
   */
  cInstanceId?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to create the static username and password.
   * 
   * @example
   * LTAI****************
   */
  accessKey?: string;
  /**
   * @remarks
   * The static username.
   * 
   * @example
   * MjphbXFwLWNuLXVxbTJ6cjc2djAwMzpMVEFJNX*******ZNMWVSWnRFSjZ2Zm8=
   */
  userName?: string;
  /**
   * @remarks
   * The static password.
   * 
   * @example
   * OUYwQzM2QjZBRkUxNDRFM***************MzZCNzdDQzoxNjcxNDMwMzkyODI1
   */
  password?: string;
  /**
   * @remarks
   * The timestamp that indicates when the static username and password were deleted. Unit: milliseconds.
   * 
   * @example
   * 1671175303522
   */
  deleted?: number;
  /**
   * @remarks
   * The timestamp that indicates when the static username and password were created. Unit: milliseconds.
   * 
   * @example
   * 1671175303522
   */
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      masterUid: 'masterUid',
      cInstanceId: 'cInstanceId',
      accessKey: 'accessKey',
      userName: 'userName',
      password: 'password',
      deleted: 'deleted',
      createTimestamp: 'createTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterUid: 'number',
      cInstanceId: 'string',
      accessKey: 'string',
      userName: 'string',
      password: 'string',
      deleted: 'number',
      createTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

