// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the project. The default value is an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * Description of my-project-test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the recycle bin feature.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  recycleBinEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      recycleBinEnabled: 'recycleBinEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      recycleBinEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

