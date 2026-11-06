// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskStepResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The interaction method of the step. Valid values:
   * 
   * - **prompt**: Displays step prompts.
   * - **connection**: Provides connection operations to enter the builder or validation environment.
   * - **prompt_connection**: Provides both prompts and connection operations.
   * 
   * @example
   * connection
   */
  action?: string;
  /**
   * @remarks
   * The Chinese name of the phase to which the step belongs, such as builder environment preparation or test validation.
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
   * The numeric index of the step definition, which is used to identify the step and its sequence. Do not use this value as the completion percentage.
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
   * - **INIT**: Initialize the task.
   * - **CREATE_BUILDER_ENV**: Create the builder environment.
   * - **DEPLOY_BUILDER_ENV**: Deploy the builder environment.
   * - **INIT_BUILDER**: Initialize the builder tool.
   * - **DOWNLOAD_APP**: Download application resources.
   * - **START_BUILD**: Start image creation.
   * - **COMPLETE_INSTALL**: Complete application installation and configuration.
   * - **CREATE_VALIDATE_ENV**: Create the validation environment.
   * - **DEPLOY_VALIDATE_ENV**: Deploy the validation environment.
   * - **COMPLETE_VALIDATE**: Complete image validation.
   * - **ARCHIVE_DATA**: Archive image data.
   * - **CREATE_IMAGE**: Generate the image.
   * - **FINISH_ADAPT**: End the creation process.
   * 
   * Steps when Type is set to ADAPTOR:
   * 
   * - **INIT**: Initialize the task.
   * - **CREATE_BUILDER_ENV**: Create the builder environment.
   * - **DEPLOY_BUILDER_ENV**: Deploy the builder environment.
   * - **INIT_BUILDER**: Initialize the builder tool.
   * - **DOWNLOAD_APP**: Download application resources.
   * - **START_VHD**: Start application recording.
   * - **BUILD_VHD**: Generate the application VHD.
   * - **UPLOAD_VHD**: Upload the application VHD.
   * - **COMPLETE_BUILDER**: Complete application creation.
   * - **CREATE_VALIDATE_ENV**: Create the validation environment.
   * - **DEPLOY_VALIDATE_ENV**: Deploy the validation environment.
   * - **COMPLETE_VALIDATE**: Complete application validation.
   * - **CREATE_IMAGE**: Generate the application image.
   * - **FINISH_ADAPT**: End the application adaptation process.
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
   * The list of step definitions for the specified task type.
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

