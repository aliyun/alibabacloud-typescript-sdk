// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationParametersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * A list of subcomponent IDs. If you specify this parameter, the operation returns the parameters and parameter templates for only these components.
   */
  componentIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      componentIdListShrink: 'ComponentIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      componentIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

