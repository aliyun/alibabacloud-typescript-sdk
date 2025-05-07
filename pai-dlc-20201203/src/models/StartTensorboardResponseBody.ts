// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTensorboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The TensorBoard instance ID.
   * 
   * @example
   * tensorboard-20210114104214-vf9lowjt3pso
   */
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

