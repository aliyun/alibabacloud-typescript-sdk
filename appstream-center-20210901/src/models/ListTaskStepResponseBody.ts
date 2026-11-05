// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskStepResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The interaction method of the step. Valid values:
   * - **prompt**: Displays step prompts.
   * - **connection**: Provides connection operations to enter the build or validation environment.
   * - **prompt_connection**: Provides both prompts and connection operations.
   * 
   * @example
   * connection
   */
  action?: string;
  /**
   * @remarks
   * The Chinese name of the phase to which the step belongs, such as build environment preparation or test validation.
   * 
   * @example
   * 制作环境准备
   */
  category?: string;
  /**
   * @remarks
   * The English name of the phase to which the step belongs. This field is returned for image creation steps, but may not be returned for application adaptation steps.
   * 
   * @example
   * Builder Environment Preparation
   */
  categoryEn?: string;
  /**
   * @remarks
   * The numeric index of the step definition, which is used to identify the step and its sequence. Do not treat this value as a completion percentage.
   * 
   * @example
   * 10
   */
  index?: number;
  /**
   * @remarks
   * The name identifier of the step, which is used to match the step records returned by GetTask.
   * 
   * Steps when Type is set to IMAGE:
   * 
   * - **INIT**: Initializes the task.
   * - **CREATE_BUILDER_ENV**: Creates the build environment.
   * - **DEPLOY_BUILDER_ENV**: Deploys the build environment.
   * - **INIT_BUILDER**: Initializes the build tool.
   * - **DOWNLOAD_APP**: Downloads application resources.
   * - **START_BUILD**: Starts image creation.
   * - **COMPLETE_INSTALL**: Completes application installation and configuration.
   * - **CREATE_VALIDATE_ENV**: Creates the validation environment.
   * - **DEPLOY_VALIDATE_ENV**: Deploys the validation environment.
   * - **COMPLETE_VALIDATE**: Completes image validation.
   * - **ARCHIVE_DATA**: Archives image data.
   * - **CREATE_IMAGE**: Generates the image.
   * - **FINISH_ADAPT**: Ends the creation process.
   * 
   * Steps when Type is set to ADAPTOR:
   * 
   * - **INIT**: Initializes the task.
   * - **CREATE_BUILDER_ENV**: Creates the build environment.
   * - **DEPLOY_BUILDER_ENV**: Deploys the build environment.
   * - **INIT_BUILDER**: Initializes the build tool.
   * - **DOWNLOAD_APP**: Downloads application resources.
   * - **START_VHD**: Starts application recording.
   * - **BUILD_VHD**: Generates the application VHD.
   * - **UPLOAD_VHD**: Uploads the application VHD.
   * - **COMPLETE_BUILDER**: Completes application creation.
   * - **CREATE_VALIDATE_ENV**: Creates the validation environment.
   * - **DEPLOY_VALIDATE_ENV**: Deploys the validation environment.
   * - **COMPLETE_VALIDATE**: Completes application validation.
   * - **CREATE_IMAGE**: Generates the application image.
   * - **FINISH_ADAPT**: Ends the application adaptation process.
   * 
   * @example
   * CREATE_BUILDER_ENV
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      category: 'Category',
      categoryEn: 'CategoryEn',
      index: 'Index',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      category: 'string',
      categoryEn: 'string',
      index: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskStepResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of records returned in the list.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of step definitions for the selected task type.
   */
  data?: ListTaskStepResponseBodyData[];
  /**
   * @remarks
   * The unique identifier of the request. You can provide this value for troubleshooting.
   * 
   * @example
   * 01A1A962-5503-107B-AC8F-EBA85DF905AC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': ListTaskStepResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

