// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImagePipelineRequestAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the feature that automatically adds a suffix to the name of the image created based on the image template. Valid value:
   * 
   * *   disable
   * 
   * @example
   * disable
   */
  imageNameSuffix?: string;
  /**
   * @remarks
   * Specifies whether to retain Cloud Assistant Agent that is installed during the image building process. During the image building process, the system automatically installs Cloud Assistant Agent on the intermediate instance to run commands. You can choose whether to retain Cloud Assistant Agent that is installed during the image building process in the new image. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * >  The setting of this parameter does not affect Cloud Assistant Agent that comes with your image.
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

