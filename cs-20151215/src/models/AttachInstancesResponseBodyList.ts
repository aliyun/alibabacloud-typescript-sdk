// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstancesResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The code that indicates the task result.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-2ze0lgm3y6iylcbt****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the ECS instance is successfully added to the ACK cluster.
   * 
   * @example
   * successful
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instanceId',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

