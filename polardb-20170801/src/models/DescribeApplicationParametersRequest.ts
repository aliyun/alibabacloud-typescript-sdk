// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationParametersRequest extends $dara.Model {
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
  componentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      componentIdList: 'ComponentIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      componentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.componentIdList)) {
      $dara.Model.validateArray(this.componentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

