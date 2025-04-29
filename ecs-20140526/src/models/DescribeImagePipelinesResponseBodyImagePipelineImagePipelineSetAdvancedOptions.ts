// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to disable the feature that automatically adds a suffix to the name of the image created based on the image template. Valid value:
   * 
   * *   disable
   * 
   * @example
   * disable
   */
  imageNameSuffix?: string;
  /**
   * @remarks
   * Indicates whether to retain Cloud Assistant. During the image building process, the system automatically installs Cloud Assistant in the intermediate instance to run commands. You can choose whether to retain Cloud Assistant in the new image created based on the image template. Valid values:
   * 
   * *   true: retains Cloud Assistant.
   * *   false: does not retain Cloud Assistant.
   * 
   * >  This parameter does not affect Cloud Assistant that comes with your image.
   * 
   * @example
   * true
   */
  retainCloudAssistant?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageNameSuffix: 'ImageNameSuffix',
      retainCloudAssistant: 'RetainCloudAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameSuffix: 'string',
      retainCloudAssistant: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

