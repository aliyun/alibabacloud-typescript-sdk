// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpIncomingRequestHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 433045006266368
   */
  configId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 608665779308176
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

