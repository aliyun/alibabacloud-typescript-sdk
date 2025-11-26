// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationMseServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f7730764-d88f-4b9a-8d8e-cd8efbfe****
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to enable traffic limiting and degradation. Set to true to check traffic limiting and degradation permissions when accessing related APIs; set to false otherwise.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableAhas?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enableAhas: 'EnableAhas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enableAhas: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

