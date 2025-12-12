// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventMetaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  securityToken?: string;
  /**
   * @example
   * Event.EventCode
   */
  sourceCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
      sourceCode: 'SourceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityToken: 'string',
      sourceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

