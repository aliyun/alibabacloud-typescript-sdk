// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8B26B44-0189-443E-9816-D951F596****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task that is used to export the custom image.
   * 
   * @example
   * tsk-bp67acfmxazb4p****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

