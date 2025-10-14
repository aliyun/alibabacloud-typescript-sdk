// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomEndpointRequest extends $dara.Model {
  /**
   * @example
   * pxe-8if3zrfsu****hgw
   */
  customEndpointId?: string;
  /**
   * @example
   * pxc-hzravgpt8q****
   */
  DBInstanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      customEndpointId: 'CustomEndpointId',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEndpointId: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

