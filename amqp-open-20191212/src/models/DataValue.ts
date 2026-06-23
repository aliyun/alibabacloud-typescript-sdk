// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataValue extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account or RAM user that created the static username and password.
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
   * The AccessKey ID that was used to create the static username and password.
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
   * The UNIX timestamp when the static username and password were deleted. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  deleted?: number;
  /**
   * @remarks
   * The UNIX timestamp when the static username and password were created. Unit: milliseconds.
   * 
   * @example
   * 1671175303522
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * *** environment
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      masterUid: 'masterUid',
      cInstanceId: 'cInstanceId',
      accessKey: 'accessKey',
      userName: 'userName',
      password: 'password',
      deleted: 'deleted',
      createTimestamp: 'createTimestamp',
      remark: 'Remark',
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
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

