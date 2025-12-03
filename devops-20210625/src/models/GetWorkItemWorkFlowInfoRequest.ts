// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemWorkFlowInfoRequest extends $dara.Model {
  /**
   * @example
   * 711d33c738b9171c45fa......
   */
  configurationId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationId: 'configurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

