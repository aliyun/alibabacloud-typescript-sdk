// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDashboardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-co370icmjeu****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The dashboard name.
   * 
   * @example
   * PLUGIN
   */
  name?: string;
  /**
   * @remarks
   * The dashboard title.
   * 
   * @example
   * APIG Plugin
   */
  title?: string;
  /**
   * @remarks
   * The dashboard URL.
   * 
   * @example
   * https://sls.console.aliyun.com/lognext/project/xxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

