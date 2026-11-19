// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnlineTestResultRequest extends $dara.Model {
  /**
   * @remarks
   * The resource type. Valid value: video. If you specify image, audio, or document, the request is rejected and a 400 error is returned with the message "resourceType should be in specific values annotated on @IsIn". Note: This parameter is actually required. If it is not provided, the API returns a 400 error with the message "resourceType may not be empty", but the required field remains false.
   * 
   * @example
   * video
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

