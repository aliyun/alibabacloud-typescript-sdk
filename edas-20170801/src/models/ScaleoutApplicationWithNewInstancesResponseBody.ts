// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleoutApplicationWithNewInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process for the scale-out.
   * 
   * @example
   * e370c17f-*****-3df0721a327
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The IDs of ECS instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * e370c17f-*****-3df0721a327
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      code: 'Code',
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      code: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

