// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The task tag. This parameter is optional.
   * 
   * @example
   * default
   */
  dispatchTag?: string;
  /**
   * @remarks
   * The startup parameters for the intelligent workflow. The value is a JSON string, such as media asset information or live streaming/RTC stream information.
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
   * The custom user data. This parameter is optional.
   * 
   * @example
   * {
   * "url":"https://test.com"
   * }
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the intelligent workflow template.
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

