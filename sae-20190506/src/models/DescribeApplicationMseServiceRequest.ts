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
   * Specifies whether the throttling and degradation feature is enabled. Set this parameter to true when you call API operations related to throttling and degradation. Otherwise, set this parameter to false. Valid values:
   * - true: Checks the permissions for throttling and degradation.
   * - false: Does not check the permissions for throttling and degradation.
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

