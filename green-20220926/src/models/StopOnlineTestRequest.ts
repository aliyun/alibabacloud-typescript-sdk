// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopOnlineTestRequest extends $dara.Model {
  /**
   * @remarks
   * Resource type
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * Service encoding
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * Detection TaskId
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      serviceCode: 'string',
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

