// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnlineTestResultRequest extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * videoDetection
   */
  serviceCode?: string;
  /**
   * @remarks
   * The ID of the detection task.
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

