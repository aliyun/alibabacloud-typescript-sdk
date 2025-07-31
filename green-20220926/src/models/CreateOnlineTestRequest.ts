// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOnlineTestRequest extends $dara.Model {
  /**
   * @example
   * xxxxxxx
   */
  dataId?: string;
  /**
   * @example
   * video
   */
  resourceType?: string;
  /**
   * @example
   * VideoModeration
   */
  serviceCode?: string;
  /**
   * @example
   * https://xxxxxxxxxx.com/data/data.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
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

