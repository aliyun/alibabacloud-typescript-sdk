// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The tag for the task.
   * 
   * @example
   * default
   */
  dispatchTag?: string;
  /**
   * @remarks
   * A JSON string containing the specific input parameters, such as information about the media assets, standard live streams, or RTC streams.
   * 
   * @example
   * {
   *     "live_url": {
   *         "Url": "rtmp://test.com/test_app/test_stream?auth_key=test",
   *         "MaxIdleTime": 20
   *     },
   *     "source_language_id": "es"
   * }
   */
  inputs?: string;
  /**
   * @remarks
   * A user-defined parameter for passing custom metadata.
   * 
   * @example
   * {
   * "url":"https://test.com"
   * }
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the workflow template.
   * 
   * @example
   * ****3f44-f1f6-477e-9364-c5e6c49e****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchTag: 'DispatchTag',
      inputs: 'Inputs',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchTag: 'string',
      inputs: 'string',
      userData: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

